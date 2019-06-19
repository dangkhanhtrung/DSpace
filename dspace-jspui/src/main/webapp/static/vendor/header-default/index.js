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
            eventsData: [],
            homeChartRender: false,
            homeChart: {},
            treeSubject: [],
            treeActivity: [],
            treeAuthority: [],
            treeSOS: []
        },
        created: function () {
            var vm = this;
            vm.$nextTick(function () {
                var uri = window.location.search.substring(1);
                var params = new URLSearchParams(uri);
                var totalQuery = params.get("totalQuery");
                var location = params.get("location");
                vm.filters = [];
                
                if (document.getElementById('treeData__container') !== undefined && document.getElementById('treeData__container') !== null) {
                	var tempArray = JSON.parse(document.getElementById('treeData__container').innerHTML)
                	for (var key in tempArray) {
                		if (tempArray[key]['children'].length > 0) {
                			vm.treeSubject.push(tempArray[key])
                		}
                	}
                }
                if (document.getElementById('treeDataActivity__container') !== undefined && document.getElementById('treeDataActivity__container') !== null) {
                	var tempArrayAc = JSON.parse(document.getElementById('treeDataActivity__container').innerHTML)
                	for (var key in tempArrayAc) {
                		if (tempArrayAc[key]['children'].length > 0) {
                			vm.treeActivity.push(tempArrayAc[key])
                		}
                	}
                }
                if (document.getElementById('treeDataAuthority__container') !== undefined && document.getElementById('treeDataAuthority__container') !== null) {
                	var tempArrayAu = JSON.parse(document.getElementById('treeDataAuthority__container').innerHTML)
                	for (var key in tempArrayAu) {
                		if (tempArrayAu[key]['children'].length > 0) {
                			vm.treeAuthority.push(tempArrayAu[key])
                		}
                	}
                }
                if (document.getElementById('treeDataRaw__container') !== undefined && document.getElementById('treeDataRaw__container') !== null) {
                	var tempArrayAuRaw = JSON.parse(document.getElementById('treeDataRaw__container').innerHTML)
                	
                	var cusOBJ = {}
                	var cusOBJ2 = {}
                	var cusOBJ3 = {}
                	for (var key in tempArrayAuRaw) {
                		console.log(key)
                		var rawSplit = key.split("::")
                		if (cusOBJ[rawSplit[1]] === null || cusOBJ[rawSplit[1]] === undefined) {
                			cusOBJ[rawSplit[1]] = 0
                		}
                		if (rawSplit.length >= 3) {
                			if (cusOBJ2[rawSplit[2]] === null || cusOBJ2[rawSplit[2]] === undefined) {
                    			cusOBJ2[rawSplit[2]] = 0
                    		}if (cusOBJ3[rawSplit[3]] === null || cusOBJ3[rawSplit[3]] === undefined) {
                    			cusOBJ3[rawSplit[3]] = 0
                    		}
                		}
                		if (rawSplit.length === 2) {
                			cusOBJ[rawSplit[1]] = tempArrayAuRaw[key]
                		}
                		if (rawSplit.length === 3) {
                			cusOBJ2[rawSplit[2]] = tempArrayAuRaw[key]
                		}
                		if (rawSplit.length === 4) {
                			cusOBJ3[rawSplit[3]] = tempArrayAuRaw[key]
                		}
                	}
                	for (var key in cusOBJ) {
                		var curOBJK = {
            				id: key,
            				name: key,
            				fullName: 'BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::' + key,
            				numberpoint: 0,
            				count: cusOBJ[key],
            				children: []
            			}
                		var keyStart = key.substring(0, key.indexOf(".") + 1)
            			for (var key2 in cusOBJ2) {
	                		if (key2.indexOf(keyStart) === 0) {
	                			var curOBJK2 = {
	                				id: key2,
	                				name: key2,
	                				fullName: 'BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::' + key + '::' + key2,
	                				numberpoint: key.indexOf(".") + 1,
	                				count: (cusOBJ2[key2] !== undefined && cusOBJ2[key2] !== null) ? cusOBJ2[key2] : 0,
	                				children: []
	                			}
	                			var keyStart2 = key2.substring(0, key2.indexOf(".", 2) + 1)
	                			for (var key3 in cusOBJ3) {
	    	                		if (key3.indexOf(keyStart2) === 0) {
	    	                			curOBJK2['children'].push({
	    	                				id: key3,
	    	                				name: key3,
	    	                				fullName: 'BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::' + key + '::' + key2 + '::' + key3,
	    	                				numberpoint: key2.indexOf(".", 2) + 1,
	    	                				count: (cusOBJ3[key3] !== undefined && cusOBJ3[key3] !== null) ? cusOBJ3[key3] : 0
	    	                			})
	    	                		}
	    	                	}
	                			curOBJK['children'].push(curOBJK2)
	                		}
	                	}
                		vm.treeSOS.push(curOBJK)
                	}
            		console.log("vm.treeSOS", vm.treeSOS)
                }
                
                if (String(params.get('rpp')) === '1000000') {
                	setTimeout( function(){
                		
                		var FormatsTable = document.getElementsByClassName("table table-hover");
                		
                		if (FormatsTable !== undefined && FormatsTable !== null) {
                    		
                			var tableId = "my__table__to__xlsx";
                    		FormatsTable.id = tableId;

                    		var instance = new TableExport(FormatsTable, {
                    	        formats: ['xlsx']
                    	    });
                    		
                    		$( ".button-default.xlsx" ).trigger( "click" );
                    		
                    		if (String(params.get('rpp')) === '1000000') {
                    			
                    			params.set('rpp', 10);
                    			
                    		}
                		}
                		
                	}, 1000);
                }
                
                var indexSearch = 0;
                for (var key = 1; key <= 20; key++) {
                	if (params.get("filter_field_" + key) === "" ||
                			params.get("filter_field_" + key) === null ||
                			params.get("filter_field_" + key) === undefined) {
                		break;
                	} else {
                		indexSearch = indexSearch + 1;
                        vm.filters.push({id: key});
                        vm.filterQuery.push({
                            filtername: params.get("filter_field_" + key),
                            filtertype: params.get("filter_type_" + key),
                            filterquery: params.get("filter_value_" + key)
                        });
                	}
                	
                }
                
                if (params.get("filtername") !== "" && params.get("filtername") !== null && params.get("filtername") !== undefined) {
                	var indexSearchDo = indexSearch + 1;
                	vm.filters.push({id: indexSearchDo });
                    vm.filterQuery.push({
                        filtername: params.get("filtername"),
                        filtertype: params.get("filtertype"),
                        filterquery: params.get("filterquery")
                    });
                }
                
                axios.post('/rest/search', 'q=resourcetype_group:crisevents&sort=cris-id+desc', {
				  headers: { 'Content-Type': 'text/plain' }
				})
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
                
                axios.post('/rest/search', 'q=*:*&rows=0&facet=true&facet.field=resourcetype_group', {
  				  headers: { 'Content-Type': 'text/plain' }
  				})
                  .then(function (response) {
                    // handle success
                    vm.homeChart = response.data
                    vm.homeChartRender = true
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  })
                  .finally(function () {
                    // always executed
                	  vm.homeChartRender = true
                  });
            })
        },
        methods: {
        	doExportExcel: function () {
        		var pathName = window.location.pathname;
                var uri = window.location.search.substring(1);
                var params = new URLSearchParams(uri);
                params.set('rpp', 1000000);
                params.delete('t');
                var newURL = window.location.origin + pathName + '?'
                for(var pair of params.entries()) {
                	   console.log(pair[0]+ ', '+ pair[1]); 
                	   newURL += pair[0] + '=' + pair[1] + '&'
                }
                newURL += 't=' + new Date().getTime();
                window.location.href = newURL;
        	},
        	doDetailEvent: function (item) {
        		
        	},
        	processImage: function (eventsimage) {
        		let image = 'http://placehold.it/1200x768';
        		if (eventsimage !== undefined) {
        			
        			const [a1, a2, a3, a4, a5, a6, a7] = eventsimage[0].split('|||')
        			
        			image = '/jspui/cris/do/fileservice/' + a7 + '/?filename=' + a4 + '.' + a5
        			
        		}
        		return image;
        	},
            processFilters: function (data, index) {
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
                	var orgCon = $('#researcher .col-12.col-sm-9')
                	if (orgCon !== null && orgCon !== undefined) {
                		orgCon.html(response.data)
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
