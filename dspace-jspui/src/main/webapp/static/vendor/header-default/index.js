/*
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
    }
}(jQuery);

jQuery(document).ready(function ($) {

    new Vue({
        el: '#app',
        data: {
            crisDoTps: [],
            filters: [],
            filterIndex: 0,
            filterQuery: [],
            eventsData: []
        },
        created: function () {
            var vm = this;
            vm.$nextTick(function () {
                var uri = window.location.search.substring(1);
                var params = new URLSearchParams(uri);
                var totalQuery = params.get("totalQuery");
                var location = params.get("location");
                
                for (var key = 1; key <= totalQuery; key++) {
                    vm.filters.push({id: key});
                    vm.filterQuery.push({
                        filtername: params.get("filter_field_" + key),
                        filtertype: params.get("filter_type_" + key),
                        filterquery: params.get("filter_value_" + key)
                    });
                }
                axios.get('/rest/search?q=resourcetype_group:crisevents')
                .then(function (response) {
                  // handle success
                  vm.eventsData = response.data.response.docs
                  console.log(vm.eventsData);
                  if (vm.eventsData.length > 0) {
                	  setTimeout(function() {
                		  $('.events-slider').slick({
        	              		autoplay: true,
        	              		slidesToShow: 1,
        	              		slidesToScroll: 1,
        	              		arrows: true,
        	              		dots: true,
        	              		fade: true
        	              	});
                	  }, 0);
                	  
                  }
	              	
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
                .finally(function () {
                  // always executed
                });
            })
        },
        methods: {
        	doDetailEvent: function (item) {
        		
        	},
        	processImage: function (eventsimage) {
        		let image = 'http://placehold.it/1200x768';
        		if (eventsimage !== undefined) {
        			
        			const [a1, a2, a3, a4, a5, a6, a7] = eventsimage[0].split('|||')
        			
        			image = '/jspui/cris/do/fileservice/' + a7 + '/?filename=' + a4 + '.' + a5
        			
        		}
        		console.log('image', image)
        		return image;
        	},
            processFilters: function (data, index) {
                console.log('index' + index);
                if (data === '+') {
                    this.filterIndex = this.filterIndex + 1;
                    this.filters.push({id: this.filterIndex});
                    this.filterQuery.push({
                        filtername: '',
                        filtertype: '',
                        filterquery: ''
                    });
                } else if (data === '-') {
                    this.filterIndex = index;
                    this.filters.splice(this.filterIndex, 1);
                    this.filterQuery.splice(this.filterIndex, 1);
                }
            },
            searchData: function () {
                var uri = window.location.search.substring(1);
                var params = new URLSearchParams(uri);
                var location = params.get("location");
                var search = window.location.origin + window.location.pathname + '?location=' + location + '&query=' + document.getElementById('query').value;
                var indexKey = 1;
                for (var key in this.filterQuery) {

                    search = search + '&filter_field_' + indexKey + '=' + this.filterQuery[key]['filtername']
                            + '&filter_type_' + indexKey + '=' + this.filterQuery[key]['filtertype']
                            + '&filter_value_' + indexKey + '=' + this.filterQuery[key]['filterquery'];

                    indexKey = indexKey + 1;
                }
                window.location.href = search + '&rpp=10&sort_by=score&order=desc&totalQuery=' + this.filterQuery.length + '&t=' + new Date().getTime();
            },
            searchDataExpose: function () {
                var pathName = window.location.pathname;
                var location = pathName.substring(window.location.pathname.lastIndexOf('/') + 1);
                var search = window.location.origin + '/jspui/simple-search' + '?location=' + location + '&query=' + document.getElementById('query').value;
                var indexKey = 1;
                for (var key in this.filterQuery) {

                    search = search + '&filter_field_' + indexKey + '=' + this.filterQuery[key]['filtername']
                            + '&filter_type_' + indexKey + '=' + this.filterQuery[key]['filtertype']
                            + '&filter_value_' + indexKey + '=' + this.filterQuery[key]['filterquery'];

                    indexKey = indexKey + 1;
                }
                
                window.location.href = search + '&rpp=10&sort_by=score&order=desc&totalQuery=' + this.filterQuery.length + '&t=' + new Date().getTime();
            },
            clearSearchData: function () {
                var uri = window.location.search.substring(1);
                var params = new URLSearchParams(uri);
                var location = params.get("location");
                var search = window.location.origin + window.location.pathname + '?location=' + location;
                window.location.href = search;
            },
            loadPage: function (url) {
            	var vm = this
            	axios.get(url)
                .then(function (response) {
                	console.log(response.data)
                	var orgCon = document.getElementById("orgcard")
                	if (orgCon !== null && orgCon !== undefined) {
                		orgCon.innerHTML = response.data
                	}
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
                .finally(function () {
                  // always executed
                });
            }
        }
    })

});
