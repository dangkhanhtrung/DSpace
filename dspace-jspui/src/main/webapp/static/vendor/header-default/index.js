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
            filterQuery: []
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
                axios.get('http://119.17.200.66:7880/rest/table/cris_do_tp', {
                    params: {
                        cols: 'label,shortname'
                    }
                })
                        .then(function (response) {
                            vm.crisDoTps = response.data;
                            for (var key in vm.crisDoTps) {
                                if (location === vm.crisDoTps[key]['shortname']) {
                                    vm.crisDoTps[key]['active'] = true;
                                } else {
                                    vm.crisDoTps[key]['active'] = false;
                                }
                            }
                        })
                        .catch(function (error) {
                            vm.crisDoTps = [];
                        });
            })
        },
        methods: {
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
                var search = window.location.origin + window.location.pathname + '?location=' + location;
                var indexKey = 1;
                for (var key in this.filterQuery) {

                    search = search + '&filter_field_' + indexKey + '=' + this.filterQuery[key]['filtername']
                            + '&filter_type_' + indexKey + '=' + this.filterQuery[key]['filtertype']
                            + '&filter_value_' + indexKey + '=' + this.filterQuery[key]['filterquery'];

                    indexKey = indexKey + 1;
                }
                window.location.href = search + '&totalQuery=' + this.filterQuery.length + '&t=' + new Date().getTime();
            },
            clearSearchData: function () {
                var uri = window.location.search.substring(1);
                var params = new URLSearchParams(uri);
                var location = params.get("location");
                var search = window.location.origin + window.location.pathname + '?location=' + location;
                window.location.href = search;
            }
        }
    })

});
