(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ol/Map'), require('ol/View'), require('ol'), require('ol/layer'), require('ol/tilegrid'), require('ol/tilegrid/TileGrid'), require('ol/source'), require('ol/tilegrid/WMTS'), require('ol/source/VectorTile'), require('ol/format'), require('ol/geom'), require('ol/proj'), require('ol/style'), require('ol/control'), require('ol/control/MousePosition'), require('ol/interaction'), require('ol-mapbox-style/stylefunction'), require('ol-mapbox-style'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-openlayers', ['exports', '@angular/core', 'ol/Map', 'ol/View', 'ol', 'ol/layer', 'ol/tilegrid', 'ol/tilegrid/TileGrid', 'ol/source', 'ol/tilegrid/WMTS', 'ol/source/VectorTile', 'ol/format', 'ol/geom', 'ol/proj', 'ol/style', 'ol/control', 'ol/control/MousePosition', 'ol/interaction', 'ol-mapbox-style/stylefunction', 'ol-mapbox-style', '@angular/common/http', '@angular/common'], factory) :
    (factory((global['ngx-openlayers'] = {}),global.ng.core,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,global.ng.common.http,global.ng.common));
}(this, (function (exports,core,Map,View,ol,layer,tilegrid,TileGrid,source,WMTS,VectorTile,format,geom,proj,style,control,MousePosition,interaction,stylefunction,olMapboxStyle,http,common) { 'use strict';

    Map = Map && Map.hasOwnProperty('default') ? Map['default'] : Map;
    View = View && View.hasOwnProperty('default') ? View['default'] : View;
    TileGrid = TileGrid && TileGrid.hasOwnProperty('default') ? TileGrid['default'] : TileGrid;
    WMTS = WMTS && WMTS.hasOwnProperty('default') ? WMTS['default'] : WMTS;
    VectorTile = VectorTile && VectorTile.hasOwnProperty('default') ? VectorTile['default'] : VectorTile;
    MousePosition = MousePosition && MousePosition.hasOwnProperty('default') ? MousePosition['default'] : MousePosition;
    stylefunction = stylefunction && stylefunction.hasOwnProperty('default') ? stylefunction['default'] : stylefunction;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MapComponent = /** @class */ (function () {
        function MapComponent(host) {
            this.host = host;
            this.componentType = 'map';
            this.width = '100%';
            this.height = '100%';
            // we pass empty arrays to not get default controls/interactions because we have our own directives
            this.controls = [];
            this.interactions = [];
            this.onClick = new core.EventEmitter();
            this.onDblClick = new core.EventEmitter();
            this.onMoveEnd = new core.EventEmitter();
            this.onPointerDrag = new core.EventEmitter();
            this.onPointerMove = new core.EventEmitter();
            this.onPostCompose = new core.EventEmitter();
            this.onPostRender = new core.EventEmitter();
            this.onPreCompose = new core.EventEmitter();
            this.onPropertyChange = new core.EventEmitter();
            this.onSingleClick = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        MapComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('creating ol.Map instance with:', this);
                this.instance = new Map(this);
                this.instance.setTarget(this.host.nativeElement.firstElementChild);
                this.instance.on('click', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onClick.emit(event); }));
                this.instance.on('dblclick', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onDblClick.emit(event); }));
                this.instance.on('moveend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onMoveEnd.emit(event); }));
                this.instance.on('pointerdrag', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPointerDrag.emit(event); }));
                this.instance.on('pointermove', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPointerMove.emit(event); }));
                this.instance.on('postcompose', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPostCompose.emit(event); }));
                this.instance.on('postrender', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPostRender.emit(event); }));
                this.instance.on('precompose', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPreCompose.emit(event); }));
                this.instance.on('propertychange', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPropertyChange.emit(event); }));
                this.instance.on('singleclick', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onSingleClick.emit(event); }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        MapComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var properties = {};
                if (!this.instance) {
                    return;
                }
                for (var key in changes) {
                    if (changes.hasOwnProperty(key)) {
                        properties[key] = changes[key].currentValue;
                    }
                }
                // console.log('changes detected in aol-map, setting new properties: ', properties);
                this.instance.setProperties(properties, false);
            };
        /**
         * @return {?}
         */
        MapComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.instance.updateSize();
            };
        MapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-map',
                        template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        MapComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        MapComponent.propDecorators = {
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            pixelRatio: [{ type: core.Input }],
            keyboardEventTarget: [{ type: core.Input }],
            loadTilesWhileAnimating: [{ type: core.Input }],
            loadTilesWhileInteracting: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            renderer: [{ type: core.Input }],
            onClick: [{ type: core.Output }],
            onDblClick: [{ type: core.Output }],
            onMoveEnd: [{ type: core.Output }],
            onPointerDrag: [{ type: core.Output }],
            onPointerMove: [{ type: core.Output }],
            onPostCompose: [{ type: core.Output }],
            onPostRender: [{ type: core.Output }],
            onPreCompose: [{ type: core.Output }],
            onPropertyChange: [{ type: core.Output }],
            onSingleClick: [{ type: core.Output }]
        };
        return MapComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewComponent = /** @class */ (function () {
        function ViewComponent(host) {
            this.host = host;
            this.componentType = 'view';
            this.zoomAnimation = false;
            this.onChangeZoom = new core.EventEmitter();
            this.onChangeResolution = new core.EventEmitter();
            this.onChangeCenter = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('creating ol.View instance with: ', this);
                this.instance = new View(this);
                this.host.instance.setView(this.instance);
                this.instance.on('change:zoom', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChangeZoom.emit(event); }));
                this.instance.on('change:resolution', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChangeResolution.emit(event); }));
                this.instance.on('change:center', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChangeCenter.emit(event); }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ViewComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var properties = {};
                if (!this.instance) {
                    return;
                }
                for (var key in changes) {
                    if (changes.hasOwnProperty(key)) {
                        switch (key) {
                            case 'zoom':
                                /** Work-around: setting the zoom via setProperties does not work. */
                                if (this.zoomAnimation) {
                                    this.instance.animate({ zoom: changes[key].currentValue });
                                }
                                else {
                                    this.instance.setZoom(changes[key].currentValue);
                                }
                                break;
                            case 'projection':
                                this.instance = new View(this);
                                this.host.instance.setView(this.instance);
                                break;
                            default:
                                break;
                        }
                        properties[key] = changes[key].currentValue;
                    }
                }
                // console.log('changes detected in aol-view, setting new properties: ', properties);
                this.instance.setProperties(properties, false);
            };
        /**
         * @return {?}
         */
        ViewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-view');
            };
        ViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-view',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ViewComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ViewComponent.propDecorators = {
            constrainRotation: [{ type: core.Input }],
            enableRotation: [{ type: core.Input }],
            extent: [{ type: core.Input }],
            maxResolution: [{ type: core.Input }],
            minResolution: [{ type: core.Input }],
            maxZoom: [{ type: core.Input }],
            minZoom: [{ type: core.Input }],
            resolution: [{ type: core.Input }],
            resolutions: [{ type: core.Input }],
            rotation: [{ type: core.Input }],
            zoom: [{ type: core.Input }],
            zoomFactor: [{ type: core.Input }],
            center: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            zoomAnimation: [{ type: core.Input }],
            onChangeZoom: [{ type: core.Output }],
            onChangeResolution: [{ type: core.Output }],
            onChangeCenter: [{ type: core.Output }]
        };
        return ViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GraticuleComponent = /** @class */ (function () {
        function GraticuleComponent(map) {
            this.map = map;
            this.componentType = 'graticule';
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        GraticuleComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var properties = {};
                if (!this.instance) {
                    return;
                }
                for (var key in changes) {
                    if (changes.hasOwnProperty(key)) {
                        properties[key] = changes[key].currentValue;
                    }
                }
                if (properties) {
                    this.instance = new ol.Graticule(properties);
                }
                this.instance.setMap(this.map.instance);
            };
        /**
         * @return {?}
         */
        GraticuleComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.instance = new ol.Graticule({
                    strokeStyle: this.strokeStyle,
                    showLabels: this.showLabels,
                    lonLabelPosition: this.lonLabelPosition,
                    latLabelPosition: this.latLabelPosition,
                });
                this.instance.setMap(this.map.instance);
            };
        GraticuleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-graticule',
                        template: '<ng-content></ng-content>',
                    },] },
        ];
        /** @nocollapse */
        GraticuleComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        GraticuleComponent.propDecorators = {
            strokeStyle: [{ type: core.Input }],
            showLabels: [{ type: core.Input }],
            lonLabelPosition: [{ type: core.Input }],
            latLabelPosition: [{ type: core.Input }]
        };
        return GraticuleComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var LayerComponent = /** @class */ (function () {
        function LayerComponent(host) {
            this.host = host;
            this.componentType = 'layer';
        }
        /**
         * @return {?}
         */
        LayerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.precompose !== null && this.precompose !== undefined) {
                    this.instance.on('precompose', this.precompose);
                }
                if (this.postcompose !== null && this.postcompose !== undefined) {
                    this.instance.on('postcompose', this.postcompose);
                }
                this.host.instance.getLayers().push(this.instance);
            };
        /**
         * @return {?}
         */
        LayerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.host.instance.getLayers().remove(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LayerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var properties = {};
                if (!this.instance) {
                    return;
                }
                for (var key in changes) {
                    if (changes.hasOwnProperty(key)) {
                        properties[key] = changes[key].currentValue;
                        if (key === 'precompose') {
                            this.instance.un('precompose', changes[key].previousValue);
                            this.instance.on('precompose', changes[key].currentValue);
                        }
                        if (key === 'postcompose') {
                            this.instance.un('postcompose', changes[key].previousValue);
                            this.instance.on('postcompose', changes[key].currentValue);
                        }
                    }
                }
                // console.log('changes detected in aol-layer, setting new properties: ', properties);
                this.instance.setProperties(properties, false);
            };
        LayerComponent.propDecorators = {
            opacity: [{ type: core.Input }],
            visible: [{ type: core.Input }],
            extent: [{ type: core.Input }],
            zIndex: [{ type: core.Input }],
            minResolution: [{ type: core.Input }],
            maxResolution: [{ type: core.Input }],
            precompose: [{ type: core.Input }],
            postcompose: [{ type: core.Input }]
        };
        return LayerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayerGroupComponent = /** @class */ (function (_super) {
        __extends(LayerGroupComponent, _super);
        function LayerGroupComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        /**
         * @return {?}
         */
        LayerGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log(`creating ol.layer.Group instance with:`, this);
                this.instance = new layer.Group(this);
                _super.prototype.ngOnInit.call(this);
            };
        LayerGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-layer-group',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        LayerGroupComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: LayerGroupComponent, decorators: [{ type: core.SkipSelf }, { type: core.Optional }] }
            ];
        };
        return LayerGroupComponent;
    }(LayerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayerImageComponent = /** @class */ (function (_super) {
        __extends(LayerImageComponent, _super);
        function LayerImageComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        /**
         * @return {?}
         */
        LayerImageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new layer.Image(this);
                _super.prototype.ngOnInit.call(this);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LayerImageComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                _super.prototype.ngOnChanges.call(this, changes);
            };
        LayerImageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-layer-image',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        LayerImageComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        LayerImageComponent.propDecorators = {
            opacity: [{ type: core.Input }],
            visible: [{ type: core.Input }],
            extent: [{ type: core.Input }],
            minResolution: [{ type: core.Input }],
            maxResolution: [{ type: core.Input }],
            zIndex: [{ type: core.Input }]
        };
        return LayerImageComponent;
    }(LayerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayerTileComponent = /** @class */ (function (_super) {
        __extends(LayerTileComponent, _super);
        function LayerTileComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        /**
         * @return {?}
         */
        LayerTileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.layer.Tile instance with:', this);
                this.instance = new layer.Tile(this);
                _super.prototype.ngOnInit.call(this);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LayerTileComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                _super.prototype.ngOnChanges.call(this, changes);
            };
        LayerTileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-layer-tile',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        LayerTileComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        LayerTileComponent.propDecorators = {
            preload: [{ type: core.Input }],
            useInterimTilesOnError: [{ type: core.Input }]
        };
        return LayerTileComponent;
    }(LayerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayerVectorComponent = /** @class */ (function (_super) {
        __extends(LayerVectorComponent, _super);
        function LayerVectorComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        /**
         * @return {?}
         */
        LayerVectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.layer.Vector instance with:', this);
                this.instance = new layer.Vector(this);
                _super.prototype.ngOnInit.call(this);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LayerVectorComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                _super.prototype.ngOnChanges.call(this, changes);
            };
        LayerVectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-layer-vector',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        LayerVectorComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        LayerVectorComponent.propDecorators = {
            renderBuffer: [{ type: core.Input }],
            style: [{ type: core.Input }],
            updateWhileAnimating: [{ type: core.Input }],
            updateWhileInteracting: [{ type: core.Input }]
        };
        return LayerVectorComponent;
    }(LayerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayerVectorTileComponent = /** @class */ (function (_super) {
        __extends(LayerVectorTileComponent, _super);
        function LayerVectorTileComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        /**
         * @return {?}
         */
        LayerVectorTileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.layer.VectorTile instance with:', this);
                this.instance = new layer.VectorTile(this);
                _super.prototype.ngOnInit.call(this);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LayerVectorTileComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                _super.prototype.ngOnChanges.call(this, changes);
            };
        LayerVectorTileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-layer-vectortile',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        LayerVectorTileComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        LayerVectorTileComponent.propDecorators = {
            renderBuffer: [{ type: core.Input }],
            renderMode: [{ type: core.Input }],
            renderOrder: [{ type: core.Input }],
            style: [{ type: core.Input }],
            updateWhileAnimating: [{ type: core.Input }],
            updateWhileInteracting: [{ type: core.Input }],
            visible: [{ type: core.Input }],
            declutter: [{ type: core.Input }]
        };
        return LayerVectorTileComponent;
    }(LayerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceComponent = /** @class */ (function () {
        function SourceComponent(host, raster) {
            this.host = host;
            this.raster = raster;
            this.componentType = 'source';
        }
        /**
         * @return {?}
         */
        SourceComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.host && this.host.instance) {
                    this.host.instance.setSource(null);
                }
                if (this.raster) {
                    this.raster.sources = [];
                }
            };
        /**
         * @protected
         * @param {?} s
         * @return {?}
         */
        SourceComponent.prototype._register = /**
         * @protected
         * @param {?} s
         * @return {?}
         */
            function (s) {
                if (this.host) {
                    this.host.instance.setSource(s);
                }
                if (this.raster) {
                    this.raster.sources = [s];
                    this.raster.init();
                }
            };
        SourceComponent.propDecorators = {
            attributions: [{ type: core.Input }]
        };
        return SourceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TileGridComponent = /** @class */ (function () {
        function TileGridComponent() {
        }
        /**
         * @return {?}
         */
        TileGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.resolutions) {
                    this.instance = tilegrid.createXYZ(this);
                }
                else {
                    this.instance = new TileGrid(this);
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        TileGridComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.resolutions) {
                    this.instance = tilegrid.createXYZ(this);
                }
                else {
                    this.instance = new TileGrid(this);
                }
            };
        TileGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-tilegrid',
                        template: '',
                    },] },
        ];
        TileGridComponent.propDecorators = {
            extent: [{ type: core.Input }],
            maxZoom: [{ type: core.Input }],
            minZoom: [{ type: core.Input }],
            tileSize: [{ type: core.Input }],
            origin: [{ type: core.Input }],
            resolutions: [{ type: core.Input }]
        };
        return TileGridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceRasterComponent = /** @class */ (function (_super) {
        __extends(SourceRasterComponent, _super);
        function SourceRasterComponent(layer$$1) {
            var _this = _super.call(this, layer$$1) || this;
            _this.beforeOperations = new core.EventEmitter();
            _this.afterOperations = new core.EventEmitter();
            _this.sources = [];
            return _this;
        }
        /**
         * @return {?}
         */
        SourceRasterComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.init();
            };
        /**
         * @return {?}
         */
        SourceRasterComponent.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new source.Raster(this);
                this.instance.on('beforeoperations', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.beforeOperations.emit(event); }));
                this.instance.on('afteroperations', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.afterOperations.emit(event); }));
                this._register(this.instance);
            };
        SourceRasterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-raster',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [
                            {
                                provide: SourceComponent,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return SourceRasterComponent; })),
                            },
                        ],
                    },] },
        ];
        /** @nocollapse */
        SourceRasterComponent.ctorParameters = function () {
            return [
                { type: LayerImageComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceRasterComponent.propDecorators = {
            operation: [{ type: core.Input }],
            threads: [{ type: core.Input }],
            lib: [{ type: core.Input }],
            operationType: [{ type: core.Input }],
            beforeOperations: [{ type: core.Output }],
            afterOperations: [{ type: core.Output }]
        };
        return SourceRasterComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceXYZComponent = /** @class */ (function (_super) {
        __extends(SourceXYZComponent, _super);
        function SourceXYZComponent(layer$$1, raster) {
            var _this = _super.call(this, layer$$1, raster) || this;
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        SourceXYZComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                if (this.tileGridXYZ) {
                    this.tileGrid = this.tileGridXYZ.instance;
                }
                this.init();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        SourceXYZComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var properties = {};
                if (!this.instance) {
                    return;
                }
                for (var key in changes) {
                    if (changes.hasOwnProperty(key)) {
                        properties[key] = changes[key].currentValue;
                    }
                }
                this.instance.setProperties(properties, false);
                if (changes.hasOwnProperty('url')) {
                    this.init();
                }
            };
        /**
         * @return {?}
         */
        SourceXYZComponent.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new source.XYZ(this);
                this.instance.on('tileloadstart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.tileLoadStart.emit(event); }));
                this.instance.on('tileloadend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.tileLoadEnd.emit(event); }));
                this.instance.on('tileloaderror', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.tileLoadError.emit(event); }));
                this._register(this.instance);
            };
        SourceXYZComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-xyz',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceXYZComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceXYZComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
                { type: SourceRasterComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
            ];
        };
        SourceXYZComponent.propDecorators = {
            cacheSize: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            opaque: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            reprojectionErrorThreshold: [{ type: core.Input }],
            minZoom: [{ type: core.Input }],
            maxZoom: [{ type: core.Input }],
            tileGrid: [{ type: core.Input }],
            tileLoadFunction: [{ type: core.Input }],
            tilePixelRatio: [{ type: core.Input }],
            tileSize: [{ type: core.Input }],
            tileUrlFunction: [{ type: core.Input }],
            url: [{ type: core.Input }],
            urls: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            tileGridXYZ: [{ type: core.ContentChild, args: [TileGridComponent,] }],
            tileLoadStart: [{ type: core.Output }],
            tileLoadEnd: [{ type: core.Output }],
            tileLoadError: [{ type: core.Output }]
        };
        return SourceXYZComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceOsmComponent = /** @class */ (function (_super) {
        __extends(SourceOsmComponent, _super);
        function SourceOsmComponent(layer$$1, raster) {
            var _this = _super.call(this, layer$$1, raster) || this;
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        SourceOsmComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.tileGridXYZ) {
                    this.tileGrid = this.tileGridXYZ.instance;
                }
                this.instance = new source.OSM(this);
                this.instance.on('tileloadstart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.tileLoadStart.emit(event); }));
                this.instance.on('tileloadend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.tileLoadEnd.emit(event); }));
                this.instance.on('tileloaderror', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.tileLoadError.emit(event); }));
                this._register(this.instance);
            };
        SourceOsmComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-osm',
                        template: "\n    <div class=\"aol-source-osm\"></div>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceOsmComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceOsmComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
                { type: SourceRasterComponent, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        SourceOsmComponent.propDecorators = {
            attributions: [{ type: core.Input }],
            cacheSize: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            maxZoom: [{ type: core.Input }],
            opaque: [{ type: core.Input }],
            reprojectionErrorThreshold: [{ type: core.Input }],
            tileLoadFunction: [{ type: core.Input }],
            url: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            tileLoadStart: [{ type: core.Output }],
            tileLoadEnd: [{ type: core.Output }],
            tileLoadError: [{ type: core.Output }]
        };
        return SourceOsmComponent;
    }(SourceXYZComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceBingmapsComponent = /** @class */ (function (_super) {
        __extends(SourceBingmapsComponent, _super);
        function SourceBingmapsComponent(layer$$1) {
            var _this = _super.call(this, layer$$1) || this;
            _this.imagerySet = 'Aerial';
            return _this;
        }
        /**
         * @return {?}
         */
        SourceBingmapsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new source.BingMaps(this);
                this.host.instance.setSource(this.instance);
            };
        SourceBingmapsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-bingmaps',
                        template: "\n    <div class=\"aol-source-bingmaps\"></div>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceBingmapsComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceBingmapsComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceBingmapsComponent.propDecorators = {
            cacheSize: [{ type: core.Input }],
            hidpi: [{ type: core.Input }],
            culture: [{ type: core.Input }],
            key: [{ type: core.Input }],
            imagerySet: [{ type: core.Input }],
            maxZoom: [{ type: core.Input }],
            reprojectionErrorThreshold: [{ type: core.Input }],
            tileLoadFunction: [{ type: core.Input }],
            wrapX: [{ type: core.Input }]
        };
        return SourceBingmapsComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceVectorComponent = /** @class */ (function (_super) {
        __extends(SourceVectorComponent, _super);
        function SourceVectorComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @return {?}
         */
        SourceVectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new source.Vector(this);
                this.host.instance.setSource(this.instance);
            };
        SourceVectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-vector',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceVectorComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceVectorComponent.ctorParameters = function () {
            return [
                { type: LayerVectorComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceVectorComponent.propDecorators = {
            overlaps: [{ type: core.Input }],
            useSpatialIndex: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            url: [{ type: core.Input }],
            format: [{ type: core.Input }],
            strategy: [{ type: core.Input }]
        };
        return SourceVectorComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceClusterComponent = /** @class */ (function (_super) {
        __extends(SourceClusterComponent, _super);
        function SourceClusterComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @return {?}
         */
        SourceClusterComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.source = this.sourceVectorComponent.instance;
                this.instance = new source.Cluster(this);
                this.host.instance.setSource(this.instance);
            };
        SourceClusterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-cluster',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceClusterComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceClusterComponent.ctorParameters = function () {
            return [
                { type: LayerVectorComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceClusterComponent.propDecorators = {
            distance: [{ type: core.Input }],
            geometryFunction: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            sourceVectorComponent: [{ type: core.ContentChild, args: [SourceVectorComponent,] }]
        };
        return SourceClusterComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TileGridWMTSComponent = /** @class */ (function (_super) {
        __extends(TileGridWMTSComponent, _super);
        function TileGridWMTSComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        TileGridWMTSComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new WMTS(this);
            };
        TileGridWMTSComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-tilegrid-wmts',
                        template: '',
                    },] },
        ];
        TileGridWMTSComponent.propDecorators = {
            origin: [{ type: core.Input }],
            origins: [{ type: core.Input }],
            resolutions: [{ type: core.Input }],
            matrixIds: [{ type: core.Input }],
            sizes: [{ type: core.Input }],
            tileSizes: [{ type: core.Input }],
            widths: [{ type: core.Input }]
        };
        return TileGridWMTSComponent;
    }(TileGridComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceTileWMTSComponent = /** @class */ (function (_super) {
        __extends(SourceTileWMTSComponent, _super);
        function SourceTileWMTSComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        SourceTileWMTSComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var properties = {};
                if (!this.instance) {
                    return;
                }
                for (var key in changes) {
                    if (changes.hasOwnProperty(key)) {
                        switch (key) {
                            case 'url':
                                this.url = changes[key].currentValue;
                                this.setLayerSource();
                                break;
                            default:
                                break;
                        }
                        properties[key] = changes[key].currentValue;
                    }
                }
                this.instance.setProperties(properties, false);
            };
        /**
         * @return {?}
         */
        SourceTileWMTSComponent.prototype.setLayerSource = /**
         * @return {?}
         */
            function () {
                this.instance = new source.WMTS(this);
                this.host.instance.setSource(this.instance);
            };
        /**
         * @return {?}
         */
        SourceTileWMTSComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                if (this.tileGridWMTS) {
                    this.tileGrid = this.tileGridWMTS.instance;
                    this.setLayerSource();
                }
            };
        SourceTileWMTSComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-tilewmts',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceTileWMTSComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceTileWMTSComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceTileWMTSComponent.propDecorators = {
            cacheSize: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            tileGrid: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            reprojectionErrorThreshold: [{ type: core.Input }],
            requestEncoding: [{ type: core.Input }],
            layer: [{ type: core.Input }],
            style: [{ type: core.Input }],
            tileClass: [{ type: core.Input }],
            tilePixelRatio: [{ type: core.Input }],
            version: [{ type: core.Input }],
            format: [{ type: core.Input }],
            matrixSet: [{ type: core.Input }],
            dimensions: [{ type: core.Input }],
            url: [{ type: core.Input }],
            tileLoadFunction: [{ type: core.Input }],
            urls: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            tileGridWMTS: [{ type: core.ContentChild, args: [TileGridWMTSComponent,] }]
        };
        return SourceTileWMTSComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatComponent = /** @class */ (function () {
        function FormatComponent() {
            this.componentType = 'format';
        }
        return FormatComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceVectorTileComponent = /** @class */ (function (_super) {
        __extends(SourceVectorTileComponent, _super);
        function SourceVectorTileComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /* need the children to construct the OL3 object */
        /* need the children to construct the OL3 object */
        /**
         * @return {?}
         */
        SourceVectorTileComponent.prototype.ngAfterContentInit = /* need the children to construct the OL3 object */
            /**
             * @return {?}
             */
            function () {
                if (this.formatComponent !== null && this.formatComponent !== undefined) {
                    this.format = this.formatComponent.instance;
                }
                if (this.tileGridComponent !== null && this.tileGridComponent !== undefined) {
                    this.tileGrid = this.tileGridComponent.instance;
                }
                // console.log('creating ol.source.VectorTile instance with:', this);
                this.instance = new VectorTile(this);
                this.host.instance.setSource(this.instance);
            };
        SourceVectorTileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-vectortile',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceVectorTileComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceVectorTileComponent.ctorParameters = function () {
            return [
                { type: LayerVectorTileComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceVectorTileComponent.propDecorators = {
            cacheSize: [{ type: core.Input }],
            overlaps: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            tilePixelRatio: [{ type: core.Input }],
            tileUrlFunction: [{ type: core.Input }],
            url: [{ type: core.Input }],
            urls: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            formatComponent: [{ type: core.ContentChild, args: [FormatComponent,] }],
            tileGridComponent: [{ type: core.ContentChild, args: [TileGridComponent,] }]
        };
        return SourceVectorTileComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceTileWMSComponent = /** @class */ (function (_super) {
        __extends(SourceTileWMSComponent, _super);
        function SourceTileWMSComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @return {?}
         */
        SourceTileWMSComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new source.TileWMS(this);
                this.host.instance.setSource(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        SourceTileWMSComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.instance && changes.hasOwnProperty('params')) {
                    this.instance.updateParams(this.params);
                }
            };
        SourceTileWMSComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-tilewms',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceTileWMSComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceTileWMSComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceTileWMSComponent.propDecorators = {
            cacheSize: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            gutter: [{ type: core.Input }],
            hidpi: [{ type: core.Input }],
            params: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            reprojectionErrorThreshold: [{ type: core.Input }],
            serverType: [{ type: core.Input }],
            tileGrid: [{ type: core.Input }],
            tileLoadFunction: [{ type: core.Input }],
            url: [{ type: core.Input }],
            urls: [{ type: core.Input }],
            wrapX: [{ type: core.Input }]
        };
        return SourceTileWMSComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceTileJSONComponent = /** @class */ (function (_super) {
        __extends(SourceTileJSONComponent, _super);
        function SourceTileJSONComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @return {?}
         */
        SourceTileJSONComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new source.TileJSON(this);
                this.host.instance.setSource(this.instance);
            };
        SourceTileJSONComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-tilejson',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceTileJSONComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceTileJSONComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceTileJSONComponent.propDecorators = {
            url: [{ type: core.Input }]
        };
        return SourceTileJSONComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceGeoJSONComponent = /** @class */ (function (_super) {
        __extends(SourceGeoJSONComponent, _super);
        function SourceGeoJSONComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @return {?}
         */
        SourceGeoJSONComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.format = new format.GeoJSON(this);
                this.instance = new source.Vector(this);
                this.host.instance.setSource(this.instance);
            };
        SourceGeoJSONComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-geojson',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceGeoJSONComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceGeoJSONComponent.ctorParameters = function () {
            return [
                { type: LayerVectorComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceGeoJSONComponent.propDecorators = {
            defaultDataProjection: [{ type: core.Input }],
            featureProjection: [{ type: core.Input }],
            geometryName: [{ type: core.Input }],
            url: [{ type: core.Input }]
        };
        return SourceGeoJSONComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceImageStaticComponent = /** @class */ (function (_super) {
        __extends(SourceImageStaticComponent, _super);
        function SourceImageStaticComponent(layer$$1) {
            var _this = _super.call(this, layer$$1) || this;
            _this.onImageLoadStart = new core.EventEmitter();
            _this.onImageLoadEnd = new core.EventEmitter();
            _this.onImageLoadError = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        SourceImageStaticComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new source.ImageStatic(this);
                this.host.instance.setSource(this.instance);
                this.instance.on('imageloadstart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onImageLoadStart.emit(event); }));
                this.instance.on('imageloadend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onImageLoadEnd.emit(event); }));
                this.instance.on('imageloaderror', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onImageLoadError.emit(event); }));
            };
        SourceImageStaticComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-imagestatic',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceImageStaticComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceImageStaticComponent.ctorParameters = function () {
            return [
                { type: LayerImageComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceImageStaticComponent.propDecorators = {
            projection: [{ type: core.Input }],
            imageExtent: [{ type: core.Input }],
            url: [{ type: core.Input }],
            attributions: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            imageLoadFunction: [{ type: core.Input }],
            imageSize: [{ type: core.Input }],
            onImageLoadStart: [{ type: core.Output }],
            onImageLoadEnd: [{ type: core.Output }],
            onImageLoadError: [{ type: core.Output }]
        };
        return SourceImageStaticComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceImageWMSComponent = /** @class */ (function (_super) {
        __extends(SourceImageWMSComponent, _super);
        function SourceImageWMSComponent(layer$$1) {
            var _this = _super.call(this, layer$$1) || this;
            _this.onImageLoadStart = new core.EventEmitter();
            _this.onImageLoadEnd = new core.EventEmitter();
            _this.onImageLoadError = new core.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        SourceImageWMSComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new source.ImageWMS(this);
                this.host.instance.setSource(this.instance);
                this.instance.on('imageloadstart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onImageLoadStart.emit(event); }));
                this.instance.on('imageloadend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onImageLoadEnd.emit(event); }));
                this.instance.on('imageloaderror', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onImageLoadError.emit(event); }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        SourceImageWMSComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.instance && changes.hasOwnProperty('params')) {
                    this.instance.updateParams(this.params);
                }
            };
        SourceImageWMSComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-imagewms',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceImageWMSComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceImageWMSComponent.ctorParameters = function () {
            return [
                { type: LayerImageComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceImageWMSComponent.propDecorators = {
            attributions: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            hidpi: [{ type: core.Input }],
            serverType: [{ type: core.Input }],
            imageLoadFunction: [{ type: core.Input }],
            params: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            ratio: [{ type: core.Input }],
            resolutions: [{ type: core.Input }],
            url: [{ type: core.Input }],
            onImageLoadStart: [{ type: core.Output }],
            onImageLoadEnd: [{ type: core.Output }],
            onImageLoadError: [{ type: core.Output }]
        };
        return SourceImageWMSComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
        __extends(SourceImageArcGISRestComponent, _super);
        function SourceImageArcGISRestComponent(layer$$1) {
            var _this = _super.call(this, layer$$1) || this;
            _this.ratio = 1.5;
            return _this;
        }
        /**
         * @return {?}
         */
        SourceImageArcGISRestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new source.ImageArcGISRest(this);
                this.host.instance.setSource(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        SourceImageArcGISRestComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.instance && changes.hasOwnProperty('params')) {
                    this.instance.updateParams(this.params);
                }
            };
        SourceImageArcGISRestComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-imagearcgisrest',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceImageArcGISRestComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceImageArcGISRestComponent.ctorParameters = function () {
            return [
                { type: LayerImageComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceImageArcGISRestComponent.propDecorators = {
            projection: [{ type: core.Input }],
            url: [{ type: core.Input }],
            attributions: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            imageLoadFunction: [{ type: core.Input }],
            params: [{ type: core.Input }],
            ratio: [{ type: core.Input }],
            resolutions: [{ type: core.Input }],
            wrapX: [{ type: core.Input }]
        };
        return SourceImageArcGISRestComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureComponent = /** @class */ (function () {
        function FeatureComponent(host) {
            this.host = host;
            this.componentType = 'feature';
        }
        /**
         * @return {?}
         */
        FeatureComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new ol.Feature();
                if (this.id !== undefined) {
                    this.instance.setId(this.id);
                }
                this.host.instance.addFeature(this.instance);
            };
        /**
         * @return {?}
         */
        FeatureComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.host.instance.removeFeature(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        FeatureComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.instance) {
                    this.instance.setId(this.id);
                }
            };
        FeatureComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-feature',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        FeatureComponent.ctorParameters = function () {
            return [
                { type: SourceVectorComponent }
            ];
        };
        FeatureComponent.propDecorators = {
            id: [{ type: core.Input }]
        };
        return FeatureComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var SimpleGeometryComponent = /** @class */ (function () {
        function SimpleGeometryComponent(map, host) {
            this.map = map;
            this.host = host;
            this.componentType = 'simple-geometry';
        }
        /**
         * @return {?}
         */
        SimpleGeometryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.host.instance.setGeometry(this.instance);
            };
        SimpleGeometryComponent.propDecorators = {
            srid: [{ type: core.Input }]
        };
        return SimpleGeometryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryCircleComponent = /** @class */ (function (_super) {
        __extends(GeometryCircleComponent, _super);
        function GeometryCircleComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-circle';
            // defaulting coordinates to [0,0]. To be overridden in child component.
            _this.instance = new geom.Circle([0, 0]);
            return _this;
        }
        Object.defineProperty(GeometryCircleComponent.prototype, "radius", {
            get: /**
             * @return {?}
             */ function () {
                return this.instance.getRadius();
            },
            set: /**
             * @param {?} radius
             * @return {?}
             */ function (radius) {
                this.instance.setRadius(radius);
            },
            enumerable: true,
            configurable: true
        });
        GeometryCircleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-circle',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryCircleComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        GeometryCircleComponent.propDecorators = {
            radius: [{ type: core.Input }]
        };
        return GeometryCircleComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryLinestringComponent = /** @class */ (function (_super) {
        __extends(GeometryLinestringComponent, _super);
        function GeometryLinestringComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-linestring';
            return _this;
        }
        /**
         * @return {?}
         */
        GeometryLinestringComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new geom.LineString([[0, 0], [1, 1]]);
                _super.prototype.ngOnInit.call(this);
            };
        GeometryLinestringComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-linestring',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryLinestringComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        return GeometryLinestringComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryMultiLinestringComponent = /** @class */ (function (_super) {
        __extends(GeometryMultiLinestringComponent, _super);
        function GeometryMultiLinestringComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-multilinestring';
            return _this;
        }
        /**
         * @return {?}
         */
        GeometryMultiLinestringComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new geom.MultiLineString([[[0, 0], [1, 1]]]);
                _super.prototype.ngOnInit.call(this);
            };
        GeometryMultiLinestringComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-multilinestring',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryMultiLinestringComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        return GeometryMultiLinestringComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryMultiPointComponent = /** @class */ (function (_super) {
        __extends(GeometryMultiPointComponent, _super);
        function GeometryMultiPointComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-multipoint';
            return _this;
        }
        /**
         * @return {?}
         */
        GeometryMultiPointComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new geom.MultiPoint([[0, 0], [1, 1]]);
                _super.prototype.ngOnInit.call(this);
            };
        GeometryMultiPointComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-multipoint',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryMultiPointComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        return GeometryMultiPointComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryMultiPolygonComponent = /** @class */ (function (_super) {
        __extends(GeometryMultiPolygonComponent, _super);
        function GeometryMultiPolygonComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-multipolygon';
            return _this;
        }
        /**
         * @return {?}
         */
        GeometryMultiPolygonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new geom.MultiPolygon([[[[0, 0], [1, 1], [0, 1]]]]);
                _super.prototype.ngOnInit.call(this);
            };
        GeometryMultiPolygonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-multipolygon',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryMultiPolygonComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        return GeometryMultiPolygonComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryPointComponent = /** @class */ (function (_super) {
        __extends(GeometryPointComponent, _super);
        function GeometryPointComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-point';
            return _this;
        }
        /**
         * @return {?}
         */
        GeometryPointComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new geom.Point([0, 0]);
                _super.prototype.ngOnInit.call(this);
            };
        GeometryPointComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-point',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryPointComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        return GeometryPointComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GeometryPolygonComponent = /** @class */ (function (_super) {
        __extends(GeometryPolygonComponent, _super);
        function GeometryPolygonComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-polygon';
            return _this;
        }
        /**
         * @return {?}
         */
        GeometryPolygonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new geom.Polygon([[[0, 0], [1, 1], [0, 1]]]);
                _super.prototype.ngOnInit.call(this);
            };
        GeometryPolygonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-geometry-polygon',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        GeometryPolygonComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: FeatureComponent }
            ];
        };
        return GeometryPolygonComponent;
    }(SimpleGeometryComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContentComponent = /** @class */ (function () {
        function ContentComponent(elementRef) {
            this.elementRef = elementRef;
        }
        ContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-content',
                        template: '<ng-content></ng-content>',
                    },] },
        ];
        /** @nocollapse */
        ContentComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return ContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OverlayComponent = /** @class */ (function () {
        function OverlayComponent(map) {
            this.map = map;
            this.componentType = 'overlay';
        }
        /**
         * @return {?}
         */
        OverlayComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.content) {
                    this.element = this.content.elementRef.nativeElement;
                    this.instance = new ol.Overlay(this);
                    this.map.instance.addOverlay(this.instance);
                }
            };
        /**
         * @return {?}
         */
        OverlayComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.instance) {
                    this.map.instance.removeOverlay(this.instance);
                }
            };
        OverlayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-overlay',
                        template: '<ng-content></ng-content>',
                    },] },
        ];
        /** @nocollapse */
        OverlayComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        OverlayComponent.propDecorators = {
            content: [{ type: core.ContentChild, args: [ContentComponent,] }],
            id: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            positioning: [{ type: core.Input }],
            stopEvent: [{ type: core.Input }],
            insertFirst: [{ type: core.Input }],
            autoPan: [{ type: core.Input }],
            autoPanAnimation: [{ type: core.Input }],
            autoPanMargin: [{ type: core.Input }]
        };
        return OverlayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoordinateComponent = /** @class */ (function () {
        function CoordinateComponent(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
            this.map = map;
            this.mapSrid = 'EPSG:3857';
            this.srid = 'EPSG:3857';
            // console.log('instancing aol-coordinate');
            if (geometryPointHost !== null) {
                this.host = geometryPointHost;
            }
            else if (geometryCircleHost !== null) {
                this.host = geometryCircleHost;
            }
            else if (viewHost !== null) {
                this.host = viewHost;
            }
            else if (overlayHost !== null) {
                this.host = overlayHost;
            }
        }
        /**
         * @return {?}
         */
        CoordinateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.map.instance.on('change:view', ( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) { return _this.onMapViewChanged(e); }));
                this.mapSrid = this.map.instance
                    .getView()
                    .getProjection()
                    .getCode();
                this.transformCoordinates();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        CoordinateComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.transformCoordinates();
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        CoordinateComponent.prototype.onMapViewChanged = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.mapSrid = event.target
                    .get(event.key)
                    .getProjection()
                    .getCode();
                this.transformCoordinates();
            };
        /**
         * @private
         * @return {?}
         */
        CoordinateComponent.prototype.transformCoordinates = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var transformedCoordinates;
                if (this.srid === this.mapSrid) {
                    transformedCoordinates = [this.x, this.y];
                }
                else {
                    transformedCoordinates = proj.transform([this.x, this.y], this.srid, this.mapSrid);
                }
                switch (this.host.componentType) {
                    case 'geometry-point':
                        this.host.instance.setCoordinates(transformedCoordinates);
                        break;
                    case 'geometry-circle':
                    case 'view':
                        this.host.instance.setCenter(transformedCoordinates);
                        break;
                    case 'overlay':
                        this.host.instance.setPosition(transformedCoordinates);
                        break;
                }
            };
        CoordinateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-coordinate',
                        template: "\n    <div class=\"aol-coordinate\"></div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        CoordinateComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: ViewComponent, decorators: [{ type: core.Optional }] },
                { type: GeometryPointComponent, decorators: [{ type: core.Optional }] },
                { type: GeometryCircleComponent, decorators: [{ type: core.Optional }] },
                { type: OverlayComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        CoordinateComponent.propDecorators = {
            x: [{ type: core.Input }],
            y: [{ type: core.Input }],
            srid: [{ type: core.Input }]
        };
        return CoordinateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollectionCoordinatesComponent = /** @class */ (function () {
        function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
            this.map = map;
            this.mapSrid = 'EPSG:3857';
            this.srid = 'EPSG:3857';
            if (!!geometryLinestring) {
                this.host = geometryLinestring;
            }
            else if (!!geometryPolygon) {
                this.host = geometryPolygon;
            }
            else if (!!geometryMultipoint) {
                this.host = geometryMultipoint;
            }
            else if (!!geometryMultilinestring) {
                this.host = geometryMultilinestring;
            }
            else if (!!geometryMultipolygon) {
                this.host = geometryMultipolygon;
            }
            else {
                throw new Error('aol-collection-coordinates must be a child of a geometry component');
            }
        }
        /**
         * @return {?}
         */
        CollectionCoordinatesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.map.instance.on('change:view', ( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) { return _this.onMapViewChanged(e); }));
                this.mapSrid = this.map.instance
                    .getView()
                    .getProjection()
                    .getCode();
                this.transformCoordinates();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        CollectionCoordinatesComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.transformCoordinates();
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        CollectionCoordinatesComponent.prototype.onMapViewChanged = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.mapSrid = event.target
                    .get(event.key)
                    .getProjection()
                    .getCode();
                this.transformCoordinates();
            };
        /**
         * @private
         * @return {?}
         */
        CollectionCoordinatesComponent.prototype.transformCoordinates = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var transformedCoordinates;
                if (this.srid === this.mapSrid) {
                    transformedCoordinates = this.coordinates;
                }
                else {
                    switch (this.host.componentType) {
                        case 'geometry-linestring':
                        case 'geometry-multipoint':
                            transformedCoordinates = (( /** @type {?} */(this.coordinates))).map(( /**
                             * @param {?} c
                             * @return {?}
                             */function (c) { return proj.transform(c, _this.srid, _this.mapSrid); }));
                            break;
                        case 'geometry-polygon':
                        case 'geometry-multilinestring':
                            transformedCoordinates = (( /** @type {?} */(this.coordinates))).map(( /**
                             * @param {?} cc
                             * @return {?}
                             */function (cc) {
                                return cc.map(( /**
                                 * @param {?} c
                                 * @return {?}
                                 */function (c) { return proj.transform(c, _this.srid, _this.mapSrid); }));
                            }));
                            break;
                        case 'geometry-multipolygon':
                            transformedCoordinates = (( /** @type {?} */(this.coordinates))).map(( /**
                             * @param {?} ccc
                             * @return {?}
                             */function (ccc) {
                                return ccc.map(( /**
                                 * @param {?} cc
                                 * @return {?}
                                 */function (cc) {
                                    return cc.map(( /**
                                     * @param {?} c
                                     * @return {?}
                                     */function (c) { return proj.transform(c, _this.srid, _this.mapSrid); }));
                                }));
                            }));
                            break;
                    }
                }
                this.host.instance.setCoordinates(transformedCoordinates);
            };
        CollectionCoordinatesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-collection-coordinates',
                        template: "\n    <div class=\"aol-collection-coordinates\"></div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        CollectionCoordinatesComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: GeometryLinestringComponent, decorators: [{ type: core.Optional }] },
                { type: GeometryPolygonComponent, decorators: [{ type: core.Optional }] },
                { type: GeometryMultiPointComponent, decorators: [{ type: core.Optional }] },
                { type: GeometryMultiLinestringComponent, decorators: [{ type: core.Optional }] },
                { type: GeometryMultiPolygonComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        CollectionCoordinatesComponent.propDecorators = {
            coordinates: [{ type: core.Input }],
            srid: [{ type: core.Input }]
        };
        return CollectionCoordinatesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleComponent = /** @class */ (function () {
        function StyleComponent(featureHost, layerHost) {
            this.componentType = 'style';
            // console.log('creating aol-style');
            this.host = !!featureHost ? featureHost : layerHost;
            if (!this.host) {
                throw new Error('aol-style must be applied to a feature or a layer');
            }
        }
        /**
         * @return {?}
         */
        StyleComponent.prototype.update = /**
         * @return {?}
         */
            function () {
                // console.log('updating style\'s host: ', this.host);
                this.host.instance.changed();
            };
        /**
         * @return {?}
         */
        StyleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating aol-style instance with: ', this);
                this.instance = new style.Style(this);
                this.host.instance.setStyle(this.instance);
            };
        StyleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-style',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        StyleComponent.ctorParameters = function () {
            return [
                { type: FeatureComponent, decorators: [{ type: core.Optional }] },
                { type: LayerVectorComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        StyleComponent.propDecorators = {
            geometry: [{ type: core.Input }],
            fill: [{ type: core.Input }],
            image: [{ type: core.Input }],
            stroke: [{ type: core.Input }],
            text: [{ type: core.Input }],
            zIndex: [{ type: core.Input }]
        };
        return StyleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleCircleComponent = /** @class */ (function () {
        function StyleCircleComponent(host) {
            this.host = host;
            this.componentType = 'style-circle';
        }
        /**
         * WORK-AROUND: since the re-rendering is not triggered on style change
         * we trigger a radius change.
         * see openlayers #6233 and #5775
         */
        /**
         * WORK-AROUND: since the re-rendering is not triggered on style change
         * we trigger a radius change.
         * see openlayers #6233 and #5775
         * @return {?}
         */
        StyleCircleComponent.prototype.update = /**
         * WORK-AROUND: since the re-rendering is not triggered on style change
         * we trigger a radius change.
         * see openlayers #6233 and #5775
         * @return {?}
         */
            function () {
                if (!!this.instance) {
                    // console.log('setting ol.style.Circle instance\'s radius');
                    this.instance.setRadius(this.radius);
                }
                this.host.update();
            };
        /**
         * @return {?}
         */
        StyleCircleComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.style.Circle instance with: ', this);
                this.instance = new style.Circle(this);
                this.host.instance.setImage(this.instance);
                this.host.update();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        StyleCircleComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes['radius']) {
                    this.instance.setRadius(changes['radius'].currentValue);
                }
                // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
            };
        /**
         * @return {?}
         */
        StyleCircleComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-style-circle');
                this.host.instance.setImage(null);
            };
        StyleCircleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-style-circle',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        StyleCircleComponent.ctorParameters = function () {
            return [
                { type: StyleComponent, decorators: [{ type: core.Host }] }
            ];
        };
        StyleCircleComponent.propDecorators = {
            fill: [{ type: core.Input }],
            radius: [{ type: core.Input }],
            snapToPixel: [{ type: core.Input }],
            stroke: [{ type: core.Input }],
            atlasManager: [{ type: core.Input }]
        };
        return StyleCircleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleTextComponent = /** @class */ (function () {
        function StyleTextComponent(host) {
            this.host = host;
            this.componentType = 'style-text';
            if (!host) {
                throw new Error('aol-style-text must be a descendant of aol-style');
            }
            // console.log('creating aol-style-text with: ', this);
        }
        /**
         * @return {?}
         */
        StyleTextComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.style.Text instance with: ', this);
                this.instance = new style.Text(this);
                this.host.instance.setText(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        StyleTextComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes['font']) {
                    this.instance.setFont(changes['font'].currentValue);
                }
                if (changes['offsetX']) {
                    this.instance.setOffsetX(changes['offsetX'].currentValue);
                }
                if (changes['offsetY']) {
                    this.instance.setOffsetY(changes['offsetY'].currentValue);
                }
                if (changes['scale']) {
                    this.instance.setScale(changes['scale'].currentValue);
                }
                if (changes['rotation']) {
                    this.instance.setRotation(changes['rotation'].currentValue);
                }
                if (changes['text']) {
                    this.instance.setText(changes['text'].currentValue);
                }
                if (changes['textAlign']) {
                    this.instance.setTextAlign(changes['textAlign'].currentValue);
                }
                if (changes['textBaseLine']) {
                    this.instance.setTextBaseline(changes['textBaseLine'].currentValue);
                }
                this.host.update();
                // console.log('changes detected in aol-style-text, setting new properties: ', changes);
            };
        StyleTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-style-text',
                        template: "\n    <div class=\"aol-style-text\"></div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        StyleTextComponent.ctorParameters = function () {
            return [
                { type: StyleComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        StyleTextComponent.propDecorators = {
            font: [{ type: core.Input }],
            offsetX: [{ type: core.Input }],
            offsetY: [{ type: core.Input }],
            scale: [{ type: core.Input }],
            rotateWithView: [{ type: core.Input }],
            rotation: [{ type: core.Input }],
            text: [{ type: core.Input }],
            textAlign: [{ type: core.Input }],
            textBaseLine: [{ type: core.Input }]
        };
        return StyleTextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleStrokeComponent = /** @class */ (function () {
        function StyleStrokeComponent(styleHost, styleCircleHost, styleTextHost) {
            if (!styleHost) {
                throw new Error('aol-style-stroke must be a descendant of aol-style');
            }
            if (!!styleTextHost) {
                this.host = styleTextHost;
            }
            else if (!!styleCircleHost) {
                this.host = styleCircleHost;
            }
            else {
                this.host = styleHost;
            }
            // console.log('creating aol-style-stroke with: ', this);
        }
        /**
         * @return {?}
         */
        StyleStrokeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.style.Stroke instance with: ', this);
                this.instance = new style.Stroke(this);
                switch (this.host.componentType) {
                    case 'style':
                        this.host.instance.setStroke(this.instance);
                        // console.log('setting ol.style instance\'s stroke:', this.host);
                        break;
                    case 'style-text':
                        this.host.instance.setStroke(this.instance);
                        break;
                    case 'style-circle':
                        this.host.stroke = this.instance;
                        // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                        break;
                    default:
                        throw new Error('unknown host type: ' + this.host);
                    // break;
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        StyleStrokeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes['color']) {
                    this.instance.setColor(changes['color'].currentValue);
                }
                if (changes['lineCap']) {
                    this.instance.setLineCap(changes['lineCap'].currentValue);
                }
                if (changes['lineDash']) {
                    this.instance.setLineDash(changes['lineDash'].currentValue);
                }
                if (changes['lineJoin']) {
                    this.instance.setLineJoin(changes['lineJoin'].currentValue);
                }
                if (changes['miterLimit']) {
                    this.instance.setMiterLimit(changes['miterLimit'].currentValue);
                }
                if (changes['width']) {
                    this.instance.setWidth(changes['width'].currentValue);
                }
                this.host.update();
                // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
            };
        StyleStrokeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-style-stroke',
                        template: "\n    <div class=\"aol-style-stroke\"></div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        StyleStrokeComponent.ctorParameters = function () {
            return [
                { type: StyleComponent, decorators: [{ type: core.Optional }] },
                { type: StyleCircleComponent, decorators: [{ type: core.Optional }] },
                { type: StyleTextComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        StyleStrokeComponent.propDecorators = {
            color: [{ type: core.Input }],
            lineCap: [{ type: core.Input }],
            lineDash: [{ type: core.Input }],
            lineJoin: [{ type: core.Input }],
            miterLimit: [{ type: core.Input }],
            width: [{ type: core.Input }]
        };
        return StyleStrokeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleIconComponent = /** @class */ (function () {
        function StyleIconComponent(host) {
            this.host = host;
        }
        /**
         * @return {?}
         */
        StyleIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.style.Icon instance with: ', this);
                this.instance = new style.Icon(this);
                this.host.instance.setImage(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        StyleIconComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes['opacity']) {
                    this.instance.setOpacity(changes['opacity'].currentValue);
                }
                if (changes['rotation']) {
                    this.instance.setRotation(changes['rotation'].currentValue);
                }
                if (changes['scale']) {
                    this.instance.setScale(changes['scale'].currentValue);
                }
                if (changes['src']) {
                    this.instance = new style.Icon(this);
                    this.host.instance.setImage(this.instance);
                }
                this.host.update();
                // console.log('changes detected in aol-style-icon: ', changes);
            };
        StyleIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-style-icon',
                        template: "\n    <div class=\"aol-style-icon\"></div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        StyleIconComponent.ctorParameters = function () {
            return [
                { type: StyleComponent, decorators: [{ type: core.Host }] }
            ];
        };
        StyleIconComponent.propDecorators = {
            anchor: [{ type: core.Input }],
            anchorXUnits: [{ type: core.Input }],
            anchorYUnits: [{ type: core.Input }],
            anchorOrigin: [{ type: core.Input }],
            color: [{ type: core.Input }],
            crossOrigin: [{ type: core.Input }],
            img: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            offsetOrigin: [{ type: core.Input }],
            opacity: [{ type: core.Input }],
            scale: [{ type: core.Input }],
            snapToPixel: [{ type: core.Input }],
            rotateWithView: [{ type: core.Input }],
            rotation: [{ type: core.Input }],
            size: [{ type: core.Input }],
            imgSize: [{ type: core.Input }],
            src: [{ type: core.Input }]
        };
        return StyleIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleFillComponent = /** @class */ (function () {
        function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
            if (!styleHost) {
                throw new Error('aol-style-stroke must be a descendant of aol-style');
            }
            if (!!styleTextHost) {
                this.host = styleTextHost;
            }
            else if (!!styleCircleHost) {
                this.host = styleCircleHost;
            }
            else {
                this.host = styleHost;
            }
            // console.log('creating aol-style-fill with: ', this);
        }
        /**
         * @return {?}
         */
        StyleFillComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // console.log('creating ol.style.Fill instance with: ', this);
                this.instance = new style.Fill(this);
                switch (this.host.componentType) {
                    case 'style':
                        this.host.instance.setFill(this.instance);
                        // console.log('setting ol.style instance\'s fill:', this.host);
                        break;
                    case 'style-text':
                        this.host.instance.setFill(this.instance);
                        break;
                    case 'style-circle':
                        this.host.fill = this.instance;
                        // console.log('setting ol.style.circle instance\'s fill:', this.host);
                        break;
                    default:
                        throw new Error('unknown host type: ' + this.host);
                    // break;
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        StyleFillComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes['color']) {
                    this.instance.setColor(changes['color'].currentValue);
                }
                this.host.update();
                // console.log('changes detected in aol-style-fill, setting new color: ', changes);
            };
        StyleFillComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-style-fill',
                        template: "\n    <div class=\"aol-style-fill\"></div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        StyleFillComponent.ctorParameters = function () {
            return [
                { type: StyleComponent, decorators: [{ type: core.Optional }] },
                { type: StyleCircleComponent, decorators: [{ type: core.Optional }] },
                { type: StyleTextComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        StyleFillComponent.propDecorators = {
            color: [{ type: core.Input }]
        };
        return StyleFillComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultControlComponent = /** @class */ (function () {
        function DefaultControlComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DefaultControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('ol.control.defaults init: ', this);
                this.instance = control.defaults(this);
                this.instance.forEach(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return _this.map.instance.addControl(c); }));
            };
        /**
         * @return {?}
         */
        DefaultControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('removing aol-control-defaults');
                this.instance.forEach(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return _this.map.instance.removeControl(c); }));
            };
        DefaultControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-defaults',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DefaultControlComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DefaultControlComponent.propDecorators = {
            attribution: [{ type: core.Input }],
            attributionOptions: [{ type: core.Input }],
            rotate: [{ type: core.Input }],
            rotateOptions: [{ type: core.Input }],
            zoom: [{ type: core.Input }],
            zoomOptions: [{ type: core.Input }]
        };
        return DefaultControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlComponent = /** @class */ (function () {
        function ControlComponent(map) {
            this.map = map;
            this.componentType = 'control';
        }
        /**
         * @return {?}
         */
        ControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.content) {
                    this.element = this.content.elementRef.nativeElement;
                    this.instance = new control.Control(this);
                    this.map.instance.addControl(this.instance);
                }
            };
        /**
         * @return {?}
         */
        ControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.instance) {
                    this.map.instance.removeControl(this.instance);
                }
            };
        ControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlComponent.propDecorators = {
            content: [{ type: core.ContentChild, args: [ContentComponent,] }]
        };
        return ControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlAttributionComponent = /** @class */ (function () {
        function ControlAttributionComponent(map, element) {
            this.map = map;
            this.element = element;
            this.componentType = 'control';
        }
        /**
         * @return {?}
         */
        ControlAttributionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.target = this.element.nativeElement;
                // console.log('ol.control.Attribution init: ', this);
                this.instance = new control.Attribution(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlAttributionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-attribution');
                this.map.instance.removeControl(this.instance);
            };
        ControlAttributionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-attribution',
                        template: "",
                    },] },
        ];
        /** @nocollapse */
        ControlAttributionComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: core.ElementRef }
            ];
        };
        ControlAttributionComponent.propDecorators = {
            collapsible: [{ type: core.Input }]
        };
        return ControlAttributionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlFullScreenComponent = /** @class */ (function () {
        function ControlFullScreenComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-fullscreen');
        }
        /**
         * @return {?}
         */
        ControlFullScreenComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.FullScreen(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlFullScreenComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-fullscreen');
                this.map.instance.removeControl(this.instance);
            };
        ControlFullScreenComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-fullscreen',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlFullScreenComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlFullScreenComponent.propDecorators = {
            className: [{ type: core.Input }],
            label: [{ type: core.Input }],
            labelActive: [{ type: core.Input }],
            tipLabel: [{ type: core.Input }],
            keys: [{ type: core.Input }]
        };
        return ControlFullScreenComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlMousePositionComponent = /** @class */ (function () {
        function ControlMousePositionComponent(map, element) {
            this.map = map;
            this.element = element;
        }
        /**
         * @return {?}
         */
        ControlMousePositionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.target = this.element.nativeElement;
                // console.log('ol.control.MousePosition init: ', this);
                this.instance = new MousePosition(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlMousePositionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-mouseposition');
                this.map.instance.removeControl(this.instance);
            };
        ControlMousePositionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-mouseposition',
                        template: "",
                    },] },
        ];
        /** @nocollapse */
        ControlMousePositionComponent.ctorParameters = function () {
            return [
                { type: MapComponent },
                { type: core.ElementRef }
            ];
        };
        ControlMousePositionComponent.propDecorators = {
            coordinateFormat: [{ type: core.Input }],
            projection: [{ type: core.Input }]
        };
        return ControlMousePositionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlOverviewMapComponent = /** @class */ (function () {
        function ControlOverviewMapComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        ControlOverviewMapComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.OverviewMap(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlOverviewMapComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeControl(this.instance);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ControlOverviewMapComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.instance != null && changes.hasOwnProperty('view')) {
                    this.reloadInstance();
                }
            };
        /**
         * @private
         * @return {?}
         */
        ControlOverviewMapComponent.prototype.reloadInstance = /**
         * @private
         * @return {?}
         */
            function () {
                this.map.instance.removeControl(this.instance);
                this.instance = new control.OverviewMap(this);
                this.map.instance.addControl(this.instance);
            };
        ControlOverviewMapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-overviewmap',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlOverviewMapComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlOverviewMapComponent.propDecorators = {
            collapsed: [{ type: core.Input }],
            collapseLabel: [{ type: core.Input }],
            collapsible: [{ type: core.Input }],
            label: [{ type: core.Input }],
            layers: [{ type: core.Input }],
            target: [{ type: core.Input }],
            tipLabel: [{ type: core.Input }],
            view: [{ type: core.Input }]
        };
        return ControlOverviewMapComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlRotateComponent = /** @class */ (function () {
        function ControlRotateComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-rotate');
        }
        /**
         * @return {?}
         */
        ControlRotateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.Rotate(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlRotateComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-rotate');
                this.map.instance.removeControl(this.instance);
            };
        ControlRotateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-rotate',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlRotateComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlRotateComponent.propDecorators = {
            className: [{ type: core.Input }],
            label: [{ type: core.Input }],
            tipLabel: [{ type: core.Input }],
            duration: [{ type: core.Input }],
            autoHide: [{ type: core.Input }]
        };
        return ControlRotateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlScaleLineComponent = /** @class */ (function () {
        function ControlScaleLineComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-scaleline');
        }
        /**
         * @return {?}
         */
        ControlScaleLineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.ScaleLine(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlScaleLineComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-scaleline');
                this.map.instance.removeControl(this.instance);
            };
        ControlScaleLineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-scaleline',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlScaleLineComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlScaleLineComponent.propDecorators = {
            units: [{ type: core.Input }]
        };
        return ControlScaleLineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlZoomComponent = /** @class */ (function () {
        function ControlZoomComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-zoom');
        }
        /**
         * @return {?}
         */
        ControlZoomComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.Zoom(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlZoomComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-zoom');
                this.map.instance.removeControl(this.instance);
            };
        ControlZoomComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-zoom',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlZoomComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlZoomComponent.propDecorators = {
            duration: [{ type: core.Input }],
            zoomInLabel: [{ type: core.Input }],
            zoomOutLabel: [{ type: core.Input }],
            zoomInTipLabel: [{ type: core.Input }],
            zoomOutTipLabel: [{ type: core.Input }],
            delta: [{ type: core.Input }]
        };
        return ControlZoomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlZoomSliderComponent = /** @class */ (function () {
        function ControlZoomSliderComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-zoomslider');
        }
        /**
         * @return {?}
         */
        ControlZoomSliderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.ZoomSlider(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlZoomSliderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-zoomslider');
                this.map.instance.removeControl(this.instance);
            };
        ControlZoomSliderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-zoomslider',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlZoomSliderComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlZoomSliderComponent.propDecorators = {
            className: [{ type: core.Input }],
            duration: [{ type: core.Input }],
            maxResolution: [{ type: core.Input }],
            minResolution: [{ type: core.Input }]
        };
        return ControlZoomSliderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlZoomToExtentComponent = /** @class */ (function () {
        function ControlZoomToExtentComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-zoomtoextent');
        }
        /**
         * @return {?}
         */
        ControlZoomToExtentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new control.ZoomToExtent(this);
                this.map.instance.addControl(this.instance);
            };
        /**
         * @return {?}
         */
        ControlZoomToExtentComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // console.log('removing aol-control-zoomtoextent');
                this.map.instance.removeControl(this.instance);
            };
        ControlZoomToExtentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-control-zoomtoextent',
                        template: "\n    <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ControlZoomToExtentComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ControlZoomToExtentComponent.propDecorators = {
            className: [{ type: core.Input }],
            label: [{ type: core.Input }],
            tipLabel: [{ type: core.Input }],
            extent: [{ type: core.Input }]
        };
        return ControlZoomToExtentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatMVTComponent = /** @class */ (function (_super) {
        __extends(FormatMVTComponent, _super);
        function FormatMVTComponent() {
            var _this = _super.call(this) || this;
            _this.instance = new format.MVT(_this);
            return _this;
        }
        FormatMVTComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-format-mvt',
                        template: '',
                        providers: [{ provide: FormatComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return FormatMVTComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        FormatMVTComponent.ctorParameters = function () { return []; };
        FormatMVTComponent.propDecorators = {
            featureClass: [{ type: core.Input }],
            geometryName: [{ type: core.Input }],
            layerName: [{ type: core.Input }],
            layers: [{ type: core.Input }]
        };
        return FormatMVTComponent;
    }(FormatComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultInteractionComponent = /** @class */ (function () {
        function DefaultInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DefaultInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = interaction.defaults();
                this.instance.forEach(( /**
                 * @param {?} i
                 * @return {?}
                 */function (i) { return _this.map.instance.addInteraction(i); }));
            };
        /**
         * @return {?}
         */
        DefaultInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance.forEach(( /**
                 * @param {?} i
                 * @return {?}
                 */function (i) { return _this.map.instance.removeInteraction(i); }));
            };
        DefaultInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-default',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DefaultInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        return DefaultInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DoubleClickZoomInteractionComponent = /** @class */ (function () {
        function DoubleClickZoomInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DoubleClickZoomInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DoubleClickZoom(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DoubleClickZoomInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-doubleclickzoom',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DoubleClickZoomInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DoubleClickZoomInteractionComponent.propDecorators = {
            duration: [{ type: core.Input }],
            delta: [{ type: core.Input }]
        };
        return DoubleClickZoomInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragAndDropInteractionComponent = /** @class */ (function () {
        function DragAndDropInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DragAndDropInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DragAndDrop(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DragAndDropInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DragAndDropInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-draganddrop',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DragAndDropInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DragAndDropInteractionComponent.propDecorators = {
            formatConstructors: [{ type: core.Input }],
            projection: [{ type: core.Input }],
            target: [{ type: core.Input }]
        };
        return DragAndDropInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragBoxInteractionComponent = /** @class */ (function () {
        function DragBoxInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DragBoxInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DragBox(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DragBoxInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DragBoxInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-dragbox',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DragBoxInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DragBoxInteractionComponent.propDecorators = {
            className: [{ type: core.Input }],
            condition: [{ type: core.Input }],
            boxEndCondition: [{ type: core.Input }]
        };
        return DragBoxInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragPanInteractionComponent = /** @class */ (function () {
        function DragPanInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DragPanInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DragPan(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DragPanInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DragPanInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-dragpan',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DragPanInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DragPanInteractionComponent.propDecorators = {
            condition: [{ type: core.Input }],
            kinetic: [{ type: core.Input }]
        };
        return DragPanInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragRotateInteractionComponent = /** @class */ (function () {
        function DragRotateInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DragRotateInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DragRotate(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DragRotateInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DragRotateInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-dragrotate',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DragRotateInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DragRotateInteractionComponent.propDecorators = {
            condition: [{ type: core.Input }],
            duration: [{ type: core.Input }]
        };
        return DragRotateInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragRotateAndZoomInteractionComponent = /** @class */ (function () {
        function DragRotateAndZoomInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DragRotateAndZoomInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DragRotateAndZoom(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DragRotateAndZoomInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DragRotateAndZoomInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-dragrotateandzoom',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DragRotateAndZoomInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DragRotateAndZoomInteractionComponent.propDecorators = {
            condition: [{ type: core.Input }],
            duration: [{ type: core.Input }]
        };
        return DragRotateAndZoomInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragZoomInteractionComponent = /** @class */ (function () {
        function DragZoomInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        DragZoomInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.DragZoom(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DragZoomInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DragZoomInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-dragzoom',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DragZoomInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DragZoomInteractionComponent.propDecorators = {
            className: [{ type: core.Input }],
            condition: [{ type: core.Input }],
            duration: [{ type: core.Input }],
            out: [{ type: core.Input }]
        };
        return DragZoomInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MouseWheelZoomInteractionComponent = /** @class */ (function () {
        function MouseWheelZoomInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        MouseWheelZoomInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.MouseWheelZoom(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        MouseWheelZoomInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-mousewheelzoom',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        MouseWheelZoomInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        MouseWheelZoomInteractionComponent.propDecorators = {
            duration: [{ type: core.Input }],
            timeout: [{ type: core.Input }],
            useAnchor: [{ type: core.Input }]
        };
        return MouseWheelZoomInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PinchZoomInteractionComponent = /** @class */ (function () {
        function PinchZoomInteractionComponent(map) {
            this.map = map;
        }
        /**
         * @return {?}
         */
        PinchZoomInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new interaction.PinchZoom(this);
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        PinchZoomInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        PinchZoomInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-pinchzoom',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        PinchZoomInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        PinchZoomInteractionComponent.propDecorators = {
            duration: [{ type: core.Input }],
            constrainResolution: [{ type: core.Input }]
        };
        return PinchZoomInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DrawInteractionComponent = /** @class */ (function () {
        function DrawInteractionComponent(map) {
            this.map = map;
            this.onChange = new core.EventEmitter();
            this.onChangeActive = new core.EventEmitter();
            this.onDrawEnd = new core.EventEmitter();
            this.onDrawStart = new core.EventEmitter();
            this.onPropertyChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        DrawInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new interaction.Draw(this);
                this.instance.on('change', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChange.emit(event); }));
                this.instance.on('change:active', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChangeActive.emit(event); }));
                this.instance.on('drawend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onDrawEnd.emit(event); }));
                this.instance.on('drawstart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onDrawStart.emit(event); }));
                this.instance.on('propertychange', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPropertyChange.emit(event); }));
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        DrawInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        DrawInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-draw',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        DrawInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        DrawInteractionComponent.propDecorators = {
            clickTolerance: [{ type: core.Input }],
            features: [{ type: core.Input }],
            source: [{ type: core.Input }],
            snapTolerance: [{ type: core.Input }],
            type: [{ type: core.Input }],
            maxPoints: [{ type: core.Input }],
            minPoints: [{ type: core.Input }],
            finishCondition: [{ type: core.Input }],
            style: [{ type: core.Input }],
            geometryFunction: [{ type: core.Input }],
            geometryName: [{ type: core.Input }],
            condition: [{ type: core.Input }],
            freehandCondition: [{ type: core.Input }],
            freehand: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            onChange: [{ type: core.Output }],
            onChangeActive: [{ type: core.Output }],
            onDrawEnd: [{ type: core.Output }],
            onDrawStart: [{ type: core.Output }],
            onPropertyChange: [{ type: core.Output }]
        };
        return DrawInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectInteractionComponent = /** @class */ (function () {
        function SelectInteractionComponent(map) {
            this.map = map;
            this.onChange = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onPropertyChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SelectInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new interaction.Select(this);
                this.instance.on('change', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChange.emit(event); }));
                this.instance.on('select', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onSelect.emit(event); }));
                this.instance.on('propertychange', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPropertyChange.emit(event); }));
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        SelectInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        SelectInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-select',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        SelectInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        SelectInteractionComponent.propDecorators = {
            addCondition: [{ type: core.Input }],
            condition: [{ type: core.Input }],
            layers: [{ type: core.Input }],
            style: [{ type: core.Input }],
            removeCondition: [{ type: core.Input }],
            toggleCondition: [{ type: core.Input }],
            multi: [{ type: core.Input }],
            features: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            onChange: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onPropertyChange: [{ type: core.Output }]
        };
        return SelectInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModifyInteractionComponent = /** @class */ (function () {
        function ModifyInteractionComponent(map) {
            this.map = map;
            this.onModifyEnd = new core.EventEmitter();
            this.onModifyStart = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onChangeActive = new core.EventEmitter();
            this.onPropertyChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ModifyInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new interaction.Modify(this);
                this.instance.on('change', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChange.emit(event); }));
                this.instance.on('change:active', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChangeActive.emit(event); }));
                this.instance.on('propertychange', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPropertyChange.emit(event); }));
                this.instance.on('modifyend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onModifyEnd.emit(event); }));
                this.instance.on('modifystart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onModifyStart.emit(event); }));
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        ModifyInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        ModifyInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-modify',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        ModifyInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        ModifyInteractionComponent.propDecorators = {
            condition: [{ type: core.Input }],
            deleteCondition: [{ type: core.Input }],
            pixelTolerance: [{ type: core.Input }],
            style: [{ type: core.Input }],
            features: [{ type: core.Input }],
            wrapX: [{ type: core.Input }],
            source: [{ type: core.Input }],
            onModifyEnd: [{ type: core.Output }],
            onModifyStart: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onChangeActive: [{ type: core.Output }],
            onPropertyChange: [{ type: core.Output }]
        };
        return ModifyInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslateInteractionComponent = /** @class */ (function () {
        function TranslateInteractionComponent(map) {
            this.map = map;
            this.onChange = new core.EventEmitter();
            this.onPropertyChange = new core.EventEmitter();
            this.onTranslateEnd = new core.EventEmitter();
            this.onTranslateStart = new core.EventEmitter();
            this.onTranslating = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        TranslateInteractionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = new interaction.Translate(this);
                this.instance.on('change', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onChange.emit(event); }));
                this.instance.on('propertychange', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onPropertyChange.emit(event); }));
                this.instance.on('translateend', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onTranslateEnd.emit(event); }));
                this.instance.on('translatestart', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onTranslateStart.emit(event); }));
                this.instance.on('translating', ( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return _this.onTranslating.emit(event); }));
                this.map.instance.addInteraction(this.instance);
            };
        /**
         * @return {?}
         */
        TranslateInteractionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.map.instance.removeInteraction(this.instance);
            };
        TranslateInteractionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-interaction-translate',
                        template: '',
                    },] },
        ];
        /** @nocollapse */
        TranslateInteractionComponent.ctorParameters = function () {
            return [
                { type: MapComponent }
            ];
        };
        TranslateInteractionComponent.propDecorators = {
            features: [{ type: core.Input }],
            layers: [{ type: core.Input }],
            hitTolerance: [{ type: core.Input }],
            onChange: [{ type: core.Output }],
            onPropertyChange: [{ type: core.Output }],
            onTranslateEnd: [{ type: core.Output }],
            onTranslateStart: [{ type: core.Output }],
            onTranslating: [{ type: core.Output }]
        };
        return TranslateInteractionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AttributionComponent = /** @class */ (function () {
        function AttributionComponent(elementRef) {
            this.elementRef = elementRef;
        }
        /**
         * @return {?}
         */
        AttributionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.html = this.elementRef.nativeElement.innerHTML;
                this.instance = new control.Attribution(this);
            };
        AttributionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-attribution',
                        template: '<ng-content></ng-content>',
                    },] },
        ];
        /** @nocollapse */
        AttributionComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return AttributionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AttributionsComponent = /** @class */ (function () {
        function AttributionsComponent(source$$1) {
            this.source = source$$1;
        }
        /* we can do this at the very end */
        /* we can do this at the very end */
        /**
         * @return {?}
         */
        AttributionsComponent.prototype.ngAfterViewInit = /* we can do this at the very end */
            /**
             * @return {?}
             */
            function () {
                if (this.attributions.length) {
                    this.instance = this.attributions.map(( /**
                     * @param {?} cmp
                     * @return {?}
                     */function (cmp) { return cmp.instance; }));
                    // console.log('setting attributions:', this.instance);
                    this.source.instance.setAttributions(this.instance);
                }
            };
        AttributionsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-attributions',
                        template: '<ng-content></ng-content>',
                    },] },
        ];
        /** @nocollapse */
        AttributionsComponent.ctorParameters = function () {
            return [
                { type: SourceComponent, decorators: [{ type: core.Host }] }
            ];
        };
        AttributionsComponent.propDecorators = {
            attributions: [{ type: core.ContentChildren, args: [AttributionComponent,] }]
        };
        return AttributionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceUTFGridComponent = /** @class */ (function (_super) {
        __extends(SourceUTFGridComponent, _super);
        function SourceUTFGridComponent(layer$$1) {
            return _super.call(this, layer$$1) || this;
        }
        /**
         * @return {?}
         */
        SourceUTFGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.instance = new source.UTFGrid(this);
                this.host.instance.setSource(this.instance);
            };
        SourceUTFGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-utfgrid',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceUTFGridComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceUTFGridComponent.ctorParameters = function () {
            return [
                { type: LayerTileComponent, decorators: [{ type: core.Host }] }
            ];
        };
        SourceUTFGridComponent.propDecorators = {
            tileJSON: [{ type: core.Input }],
            url: [{ type: core.Input }]
        };
        return SourceUTFGridComponent;
    }(SourceComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceMapboxVectorTileComponent = /** @class */ (function (_super) {
        __extends(SourceMapboxVectorTileComponent, _super);
        function SourceMapboxVectorTileComponent(layer$$1, map, http$$1) {
            var _this = _super.call(this, layer$$1) || this;
            _this.map = map;
            _this.http = http$$1;
            _this.styleLoaded = false;
            _this.spriteJsonLoaded = false;
            _this.glStyle = {};
            _this.spriteData = {};
            return _this;
        }
        /**
         * @return {?}
         */
        SourceMapboxVectorTileComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                _super.prototype.ngAfterContentInit.call(this);
                this.http.get(this.styleUrl).subscribe(( /**
                 * @param {?} styleObject
                 * @return {?}
                 */function (styleObject) {
                    _this.glStyle = styleObject;
                    _this.styleLoaded = true;
                    _this.applyMapboxStyle();
                }));
                this.http.get(this.spriteJsonUrl).subscribe(( /**
                 * @param {?} spriteData
                 * @return {?}
                 */function (spriteData) {
                    _this.spriteData = spriteData;
                    _this.spriteJsonLoaded = true;
                    _this.applyMapboxStyle();
                }));
            };
        /**
         * @return {?}
         */
        SourceMapboxVectorTileComponent.prototype.applyMapboxStyle = /**
         * @return {?}
         */
            function () {
                // set the mapbox style
                if (this.spriteJsonLoaded && this.styleLoaded) {
                    stylefunction(this.host.instance, this.glStyle, this.sourceName, undefined, this.spriteData, this.spriteUrl);
                    olMapboxStyle.applyBackground(this.map.instance, this.glStyle);
                }
            };
        SourceMapboxVectorTileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aol-source-mapbox',
                        template: "\n    <ng-content></ng-content>\n  ",
                        providers: [{ provide: SourceComponent, useExisting: core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return SourceMapboxVectorTileComponent; })) }],
                    },] },
        ];
        /** @nocollapse */
        SourceMapboxVectorTileComponent.ctorParameters = function () {
            return [
                { type: LayerVectorTileComponent, decorators: [{ type: core.Host }] },
                { type: MapComponent },
                { type: http.HttpClient }
            ];
        };
        SourceMapboxVectorTileComponent.propDecorators = {
            styleUrl: [{ type: core.Input }],
            sourceName: [{ type: core.Input }],
            spriteJsonUrl: [{ type: core.Input }],
            spriteUrl: [{ type: core.Input }]
        };
        return SourceMapboxVectorTileComponent;
    }(SourceVectorTileComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        MapComponent,
        ViewComponent,
        GraticuleComponent,
        LayerGroupComponent,
        LayerImageComponent,
        LayerTileComponent,
        LayerVectorComponent,
        LayerVectorTileComponent,
        SourceOsmComponent,
        SourceBingmapsComponent,
        SourceClusterComponent,
        SourceUTFGridComponent,
        SourceVectorComponent,
        SourceXYZComponent,
        SourceVectorTileComponent,
        SourceTileWMSComponent,
        SourceTileWMTSComponent,
        SourceTileJSONComponent,
        SourceGeoJSONComponent,
        SourceImageStaticComponent,
        SourceImageWMSComponent,
        SourceImageArcGISRestComponent,
        SourceRasterComponent,
        FeatureComponent,
        GeometryLinestringComponent,
        GeometryMultiLinestringComponent,
        GeometryMultiPointComponent,
        GeometryMultiPolygonComponent,
        GeometryPointComponent,
        GeometryPolygonComponent,
        GeometryCircleComponent,
        CoordinateComponent,
        CollectionCoordinatesComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleFillComponent,
        StyleIconComponent,
        StyleStrokeComponent,
        StyleTextComponent,
        DefaultControlComponent,
        ControlComponent,
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent,
        FormatMVTComponent,
        TileGridComponent,
        TileGridWMTSComponent,
        DefaultInteractionComponent,
        DoubleClickZoomInteractionComponent,
        DragAndDropInteractionComponent,
        DragBoxInteractionComponent,
        DragPanInteractionComponent,
        DragRotateInteractionComponent,
        DragRotateAndZoomInteractionComponent,
        DragZoomInteractionComponent,
        MouseWheelZoomInteractionComponent,
        PinchZoomInteractionComponent,
        DrawInteractionComponent,
        SelectInteractionComponent,
        ModifyInteractionComponent,
        TranslateInteractionComponent,
        OverlayComponent,
        ContentComponent,
        AttributionsComponent,
        AttributionComponent,
        SourceMapboxVectorTileComponent
    ];
    var AngularOpenlayersModule = /** @class */ (function () {
        function AngularOpenlayersModule() {
        }
        AngularOpenlayersModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS,
                        imports: [common.CommonModule, http.HttpClientModule],
                        exports: COMPONENTS,
                    },] },
        ];
        return AngularOpenlayersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MapComponent = MapComponent;
    exports.ViewComponent = ViewComponent;
    exports.GraticuleComponent = GraticuleComponent;
    exports.LayerGroupComponent = LayerGroupComponent;
    exports.LayerImageComponent = LayerImageComponent;
    exports.LayerTileComponent = LayerTileComponent;
    exports.LayerVectorComponent = LayerVectorComponent;
    exports.LayerVectorTileComponent = LayerVectorTileComponent;
    exports.SourceOsmComponent = SourceOsmComponent;
    exports.SourceBingmapsComponent = SourceBingmapsComponent;
    exports.SourceClusterComponent = SourceClusterComponent;
    exports.SourceUTFGridComponent = SourceUTFGridComponent;
    exports.SourceVectorComponent = SourceVectorComponent;
    exports.SourceXYZComponent = SourceXYZComponent;
    exports.SourceVectorTileComponent = SourceVectorTileComponent;
    exports.SourceTileWMSComponent = SourceTileWMSComponent;
    exports.SourceTileWMTSComponent = SourceTileWMTSComponent;
    exports.SourceTileJSONComponent = SourceTileJSONComponent;
    exports.SourceGeoJSONComponent = SourceGeoJSONComponent;
    exports.SourceImageStaticComponent = SourceImageStaticComponent;
    exports.SourceImageWMSComponent = SourceImageWMSComponent;
    exports.SourceRasterComponent = SourceRasterComponent;
    exports.SourceImageArcGISRestComponent = SourceImageArcGISRestComponent;
    exports.FeatureComponent = FeatureComponent;
    exports.GeometryLinestringComponent = GeometryLinestringComponent;
    exports.GeometryMultiLinestringComponent = GeometryMultiLinestringComponent;
    exports.GeometryMultiPointComponent = GeometryMultiPointComponent;
    exports.GeometryMultiPolygonComponent = GeometryMultiPolygonComponent;
    exports.GeometryPointComponent = GeometryPointComponent;
    exports.GeometryPolygonComponent = GeometryPolygonComponent;
    exports.GeometryCircleComponent = GeometryCircleComponent;
    exports.CoordinateComponent = CoordinateComponent;
    exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
    exports.StyleComponent = StyleComponent;
    exports.StyleCircleComponent = StyleCircleComponent;
    exports.StyleFillComponent = StyleFillComponent;
    exports.StyleIconComponent = StyleIconComponent;
    exports.StyleStrokeComponent = StyleStrokeComponent;
    exports.StyleTextComponent = StyleTextComponent;
    exports.DefaultControlComponent = DefaultControlComponent;
    exports.ControlComponent = ControlComponent;
    exports.ControlAttributionComponent = ControlAttributionComponent;
    exports.ControlFullScreenComponent = ControlFullScreenComponent;
    exports.ControlMousePositionComponent = ControlMousePositionComponent;
    exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
    exports.ControlRotateComponent = ControlRotateComponent;
    exports.ControlScaleLineComponent = ControlScaleLineComponent;
    exports.ControlZoomComponent = ControlZoomComponent;
    exports.ControlZoomSliderComponent = ControlZoomSliderComponent;
    exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
    exports.FormatMVTComponent = FormatMVTComponent;
    exports.TileGridComponent = TileGridComponent;
    exports.TileGridWMTSComponent = TileGridWMTSComponent;
    exports.DefaultInteractionComponent = DefaultInteractionComponent;
    exports.DoubleClickZoomInteractionComponent = DoubleClickZoomInteractionComponent;
    exports.DragAndDropInteractionComponent = DragAndDropInteractionComponent;
    exports.DragBoxInteractionComponent = DragBoxInteractionComponent;
    exports.DragPanInteractionComponent = DragPanInteractionComponent;
    exports.DragRotateInteractionComponent = DragRotateInteractionComponent;
    exports.DragRotateAndZoomInteractionComponent = DragRotateAndZoomInteractionComponent;
    exports.DragZoomInteractionComponent = DragZoomInteractionComponent;
    exports.MouseWheelZoomInteractionComponent = MouseWheelZoomInteractionComponent;
    exports.PinchZoomInteractionComponent = PinchZoomInteractionComponent;
    exports.DrawInteractionComponent = DrawInteractionComponent;
    exports.SelectInteractionComponent = SelectInteractionComponent;
    exports.ModifyInteractionComponent = ModifyInteractionComponent;
    exports.TranslateInteractionComponent = TranslateInteractionComponent;
    exports.OverlayComponent = OverlayComponent;
    exports.ContentComponent = ContentComponent;
    exports.AttributionsComponent = AttributionsComponent;
    exports.AttributionComponent = AttributionComponent;
    exports.SourceMapboxVectorTileComponent = SourceMapboxVectorTileComponent;
    exports.AngularOpenlayersModule = AngularOpenlayersModule;
    exports.ɵc = FormatComponent;
    exports.ɵd = SimpleGeometryComponent;
    exports.ɵa = LayerComponent;
    exports.ɵb = SourceComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9wZW5sYXllcnMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbWFwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3ZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ3JhdGljdWxlLmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcmdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9zb3VyY2UuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9yYXN0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy94eXouY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9vc20uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdGlsZWdyaWR3bXRzLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvdGlsZXdtcy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3RpbGVqc29uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvZ2VvanNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL2ltYWdlc3RhdGljLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvaW1hZ2V3bXMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9pbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZmVhdHVyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ2VvbS9nZW9tZXRyeWxpbmVzdHJpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2dlb20vZ2VvbWV0cnlwb2ludC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL292ZXJsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29vcmRpbmF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb2xsZWN0aW9uY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3N0cm9rZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zdHlsZXMvZmlsbC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL3JvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9zY2FsZWxpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvem9vbS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9kcmFnYW5kZHJvcC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ2JveC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3Bhbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZWFuZHpvb20uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9tb3VzZXdoZWVsem9vbS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvcGluY2h6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9kcmF3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvaW50ZXJhY3Rpb25zL21vZGlmeS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvdHJhbnNsYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2F0dHJpYnV0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3V0ZmdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9zb3VyY2UtbWFwYm94LXZlY3Rvci10aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcclxuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xyXG5pbXBvcnQgTWFwRXZlbnQgZnJvbSAnb2wvTWFwRXZlbnQnO1xyXG5pbXBvcnQgT2JqZWN0RXZlbnQgZnJvbSAnb2wvT2JqZWN0JztcclxuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IE1hcDtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHdpZHRoID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0ID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogRWxlbWVudCB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbk1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb3N0Q29tcG9zZTogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25QcmVDb21wb3NlOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25TaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcblxyXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xyXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcclxuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25EYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xyXG4gICAgdGhpcy5vbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25Qb3N0Q29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9zdFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJlQ29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWFwKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRUYXJnZXQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25EYmxDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vbk1vdmVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vblBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25Qb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25Qb3N0Q29tcG9zZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vblBvc3RSZW5kZXIuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25QcmVDb21wb3NlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25TaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC12aWV3JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBWaWV3O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3ZpZXcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnN0cmFpblJvdGF0aW9uOiBib29sZWFuIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZW5hYmxlUm90YXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6b29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6b29tRmFjdG9yOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjZW50ZXI6IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB6b29tQW5pbWF0aW9uID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5WaWV3IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnpvb20nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlWm9vbS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub25DaGFuZ2VSZXNvbHV0aW9uLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlQ2VudGVyLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICBjYXNlICd6b29tJzpcclxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21BbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFuaW1hdGUoeyB6b29tOiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Wm9vbShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3Byb2plY3Rpb24nOlxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtdmlldywgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXZpZXcnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyYXRpY3VsZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ3JhdGljdWxlJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JhdGljdWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dyYXRpY3VsZSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3Ryb2tlU3R5bGU6IFN0cm9rZTtcclxuICBASW5wdXQoKVxyXG4gIHNob3dMYWJlbHM6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBsb25MYWJlbFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBsYXRMYWJlbFBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JhdGljdWxlKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcmF0aWN1bGUoe1xyXG4gICAgICBzdHJva2VTdHlsZTogdGhpcy5zdHJva2VTdHlsZSxcclxuICAgICAgc2hvd0xhYmVsczogdGhpcy5zaG93TGFiZWxzLFxyXG4gICAgICBsb25MYWJlbFBvc2l0aW9uOiB0aGlzLmxvbkxhYmVsUG9zaXRpb24sXHJcbiAgICAgIGxhdExhYmVsUG9zaXRpb246IHRoaXMubGF0TGFiZWxQb3NpdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnb2wvZXZlbnRzJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogYW55O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2xheWVyJztcclxuXHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwcmVjb21wb3NlOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcclxuICBASW5wdXQoKVxyXG4gIHBvc3Rjb21wb3NlOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IE1hcENvbXBvbmVudCB8IExheWVyR3JvdXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMucHJlY29tcG9zZSAhPT0gbnVsbCAmJiB0aGlzLnByZWNvbXBvc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVjb21wb3NlJywgdGhpcy5wcmVjb21wb3NlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc3Rjb21wb3NlICE9PSBudWxsICYmIHRoaXMucG9zdGNvbXBvc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIHRoaXMucG9zdGNvbXBvc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmdldExheWVycygpLnB1c2godGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5yZW1vdmUodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIGlmIChrZXkgPT09ICdwcmVjb21wb3NlJykge1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncHJlY29tcG9zZScsIGNoYW5nZXNba2V5XS5wcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZWNvbXBvc2UnLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3Bvc3Rjb21wb3NlJykge1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncG9zdGNvbXBvc2UnLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLWxheWVyLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IEdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG1hcDogTWFwQ29tcG9uZW50LFxyXG4gICAgQFNraXBTZWxmKClcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBncm91cD86IExheWVyR3JvdXBDb21wb25lbnRcclxuICApIHtcclxuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBjcmVhdGluZyBvbC5sYXllci5Hcm91cCBpbnN0YW5jZSB3aXRoOmAsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcm91cCh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci1pbWFnZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJJbWFnZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBzb3VyY2U6IEltYWdlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlKHRoaXMpO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXRpbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHVibGljIHNvdXJjZTogVGlsZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwcmVsb2FkOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB1c2VJbnRlcmltVGlsZXNPbkVycm9yOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wubGF5ZXIuVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlKHRoaXMpO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcclxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBzb3VyY2U6IFZlY3RvcjtcclxuXHJcbiAgQElucHV0KClcclxuICByZW5kZXJCdWZmZXI6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzdHlsZTogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuXHJcbiAgQElucHV0KClcclxuICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICB1cGRhdGVXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wubGF5ZXIuVmVjdG9yIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3Rvcih0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1ZlY3RvclRpbGV9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHtSZW5kZXJUeXBlfSBmcm9tICdvbC9sYXllci9WZWN0b3JUaWxlJztcclxuaW1wb3J0IHtGZWF0dXJlfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7U3R5bGV9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVyQ29tcG9uZW50fSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJHcm91cENvbXBvbmVudH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVGdW5jdGlvbn0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItdmVjdG9ydGlsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICByZW5kZXJCdWZmZXI6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlbmRlck1vZGU6IFJlbmRlclR5cGUgfCBzdHJpbmc7XHJcbiAgLyogbm90IG1hcmtlZCBhcyBvcHRpb25hbCBpbiB0aGUgdHlwaW5ncyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyT3JkZXI6IChmZWF0dXJlMTogRmVhdHVyZSwgZmVhdHVyZTI6IEZlYXR1cmUpID0+IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB1cGRhdGVXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGRlY2x1dHRlcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlZlY3RvclRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yVGlsZSh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVJhc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmFzdGVyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFNvdXJjZTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzb3VyY2UnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTGF5ZXJDb21wb25lbnQsIHByb3RlY3RlZCByYXN0ZXI/OiBTb3VyY2VSYXN0ZXJDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaG9zdCAmJiB0aGlzLmhvc3QuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yYXN0ZXIpIHtcclxuICAgICAgdGhpcy5yYXN0ZXIuc291cmNlcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpIHtcclxuICAgIGlmICh0aGlzLmhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yYXN0ZXIpIHtcclxuICAgICAgdGhpcy5yYXN0ZXIuc291cmNlcyA9IFtzXTtcclxuICAgICAgdGhpcy5yYXN0ZXIuaW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVYWVogfSBmcm9tICdvbC90aWxlZ3JpZCc7XHJcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtdGlsZWdyaWQnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBUaWxlR3JpZDtcclxuXHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVTaXplOiBudW1iZXIgfCBTaXplO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVzb2x1dGlvbnMpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IGNyZWF0ZVhZWih0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZUdyaWQodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMucmVzb2x1dGlvbnMpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IGNyZWF0ZVhZWih0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZUdyaWQodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUmFzdGVyT3BlcmF0aW9uVHlwZSwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gJ29sL3NvdXJjZS9SYXN0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVJhc3RlckNvbXBvbmVudCksXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbnN0YW5jZTogUmFzdGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wZXJhdGlvbj86IE9wZXJhdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHRocmVhZHM/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBsaWI/OiBPYmplY3Q7XHJcbiAgQElucHV0KClcclxuICBvcGVyYXRpb25UeXBlPzogUmFzdGVyT3BlcmF0aW9uVHlwZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYmVmb3JlT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgYWZ0ZXJPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgc291cmNlczogU291cmNlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSYXN0ZXIodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdiZWZvcmVvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5iZWZvcmVPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkNoYW5nZXMsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWFlaIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVJhc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmFzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24sIFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UteHl6JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVhZWkNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VYWVpDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBYWVo7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvcGFxdWU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluWm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVVcmxGdW5jdGlvbj86IFVybEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmxzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkWFlaOiBUaWxlR3JpZENvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBIb3N0KClcclxuICAgIHJhc3Rlcj86IFNvdXJjZVJhc3RlckNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5ZXIsIHJhc3Rlcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy50aWxlR3JpZFhZWikge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWFlaKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIGZvcndhcmRSZWYsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBPcHRpb25hbCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT1NNIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VYWVpDb21wb25lbnQgfSBmcm9tICcuL3h5ei5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XHJcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1vc20nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXNvdXJjZS1vc21cIj48L2Rpdj5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VPc21Db21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlT3NtQ29tcG9uZW50IGV4dGVuZHMgU291cmNlWFlaQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW5zdGFuY2U6IE9TTTtcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG9wYXF1ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkRXJyb3I6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKVxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQsXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcmFzdGVyPzogU291cmNlUmFzdGVyQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXllciwgcmFzdGVyKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnRpbGVHcmlkWFlaKSB7XHJcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT1NNKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCaW5nTWFwcyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtYmluZ21hcHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXNvdXJjZS1iaW5nbWFwc1wiPjwvZGl2PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogQmluZ01hcHM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBoaWRwaTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGN1bHR1cmU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGtleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VyeVNldDogJ1JvYWQnIHwgJ0FlcmlhbCcgfCAnQWVyaWFsV2l0aExhYmVscycgfCAnY29sbGluc0JhcnQnIHwgJ29yZG5hbmNlU3VydmV5JyA9ICdBZXJpYWwnO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBCaW5nTWFwcyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XHJcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdTdHJhdGVneSB9IGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXZlY3RvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogVmVjdG9yO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB1c2VTcGF0aWFsSW5kZXg6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9ybWF0OiBGZWF0dXJlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92ZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2x1c3RlciwgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1jbHVzdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUNsdXN0ZXJDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlQ2x1c3RlckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGluc3RhbmNlOiBDbHVzdGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc3RhbmNlOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeUZ1bmN0aW9uPzogKGZlYXR1cmU6IEZlYXR1cmUpID0+IFBvaW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg/OiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKFNvdXJjZVZlY3RvckNvbXBvbmVudClcclxuICBzb3VyY2VWZWN0b3JDb21wb25lbnQ6IFNvdXJjZVZlY3RvckNvbXBvbmVudDtcclxuICBzb3VyY2U6IFZlY3RvcjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuc291cmNlID0gdGhpcy5zb3VyY2VWZWN0b3JDb21wb25lbnQuaW5zdGFuY2U7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDbHVzdGVyKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdGlsZWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZC13bXRzJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFdNVFM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcclxuICBASW5wdXQoKVxyXG4gIG9yaWdpbnM/OiBDb29yZGluYXRlW107XHJcbiAgQElucHV0KClcclxuICByZXNvbHV0aW9uczogbnVtYmVyW107XHJcbiAgQElucHV0KClcclxuICBtYXRyaXhJZHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2l6ZXM/OiBTaXplW107XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZXM/OiAobnVtYmVyIHwgU2l6ZSlbXTtcclxuICBASW5wdXQoKVxyXG4gIHdpZHRocz86IG51bWJlcltdO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgV01UUyh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25DaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbGVHcmlkV01UU0NvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkd210cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXTVRTIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgV01UUyBhcyBUaWxlR3JpZFdNVFMgfSBmcm9tICdvbC90aWxlZ3JpZCc7XHJcbmltcG9ydCB7IFdNVFNSZXF1ZXN0RW5jb2RpbmcgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld210cycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaW5zdGFuY2U6IFdNVFM7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbj86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZFdNVFM7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVxdWVzdEVuY29kaW5nPzogV01UU1JlcXVlc3RFbmNvZGluZyB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzdHlsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUNsYXNzPzogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVBpeGVsUmF0aW8/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB2ZXJzaW9uPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9ybWF0Pzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF0cml4U2V0OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkaW1lbnNpb25zPzogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybHM/OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZFdNVFNDb21wb25lbnQpXHJcbiAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRXTVRTKSB7XHJcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkV01UUy5pbnN0YW5jZTtcclxuICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybWF0Q29tcG9uZW50IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IEZlYXR1cmU7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZm9ybWF0JztcclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBWZWN0b3JUaWxlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3JUaWxlJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQge0xheWVyVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1hdENvbXBvbmVudH0gZnJvbSAnLi4vZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaWxlR3JpZENvbXBvbmVudH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VDb21wb25lbnR9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvamVjdGlvbkxpa2V9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQge1VybEZ1bmN0aW9ufSBmcm9tICdvbC9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3J0aWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCl9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFZlY3RvclRpbGU7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG92ZXJsYXBzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVVybEZ1bmN0aW9uOiBVcmxGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChGb3JtYXRDb21wb25lbnQpXHJcbiAgZm9ybWF0Q29tcG9uZW50OiBGb3JtYXRDb21wb25lbnQ7XHJcbiAgZm9ybWF0OiBGZWF0dXJlO1xyXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRDb21wb25lbnQpXHJcbiAgdGlsZUdyaWRDb21wb25lbnQ6IFRpbGVHcmlkQ29tcG9uZW50O1xyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICAvKiBuZWVkIHRoZSBjaGlsZHJlbiB0byBjb25zdHJ1Y3QgdGhlIE9MMyBvYmplY3QgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXRDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy5mb3JtYXRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZvcm1hdCA9IHRoaXMuZm9ybWF0Q29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy50aWxlR3JpZENvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkQ29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnNvdXJjZS5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgZm9yd2FyZFJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbGVXTVMgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZCB9IGZyb20gJ29sL3RpbGVncmlkJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01TQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFRpbGVXTVM7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBndXR0ZXI6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGhpZHBpOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFyYW1zOiBPYmplY3Q7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VydmVyVHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmxzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlV01TKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpbGVKU09OIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXRpbGVqc29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVKU09OQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVKU09OQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogVGlsZUpTT047XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVKU09OKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IEdlb0pTT04gfSBmcm9tICdvbC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWdlb2pzb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlR2VvSlNPTkNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VHZW9KU09OQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogVmVjdG9yO1xyXG4gIGZvcm1hdDogRmVhdHVyZTtcclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHREYXRhUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZvcm1hdCA9IG5ldyBHZW9KU09OKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlU3RhdGljIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9JbWFnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtaW1hZ2VzdGF0aWMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBJbWFnZVN0YXRpYztcclxuXHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGltYWdlRXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGltYWdlU2l6ZT86IFNpemU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlU3RhdGljKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZHN0YXJ0JywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLm9uSW1hZ2VMb2FkU3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZW5kJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLm9uSW1hZ2VMb2FkRW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVycm9yJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLm9uSW1hZ2VMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlV01TIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XHJcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdld21zJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlV01TQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBJbWFnZVdNUztcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoaWRwaTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNlcnZlclR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFyYW1zOiBPYmplY3Q7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICByZXNvbHV0aW9uczogQXJyYXk8bnVtYmVyPjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZVdNUyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2VBcmNHSVNSZXN0IH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtaW1hZ2VhcmNnaXNyZXN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaW5zdGFuY2U6IEltYWdlQXJjR0lTUmVzdDtcclxuXHJcbiAgQElucHV0KCkgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2VbXTtcclxuICBASW5wdXQoKSBjcm9zc09yaWdpbj86IHN0cmluZztcclxuICBASW5wdXQoKSBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKSBwYXJhbXM/OiB7IFtrOiBzdHJpbmddOiBhbnkgfTtcclxuICBASW5wdXQoKSByYXRpbyA9IDEuNTtcclxuICBASW5wdXQoKSByZXNvbHV0aW9ucz86IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlQXJjR0lTUmVzdCh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgU291cmNlVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZmVhdHVyZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2ZlYXR1cmUnO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogRmVhdHVyZTtcclxuXHJcbiAgQElucHV0KClcclxuICBpZDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFNvdXJjZVZlY3RvckNvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZlYXR1cmUoKTtcclxuICAgIGlmICh0aGlzLmlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRJZCh0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5hZGRGZWF0dXJlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UucmVtb3ZlRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCBTaW1wbGVHZW9tZXRyeSBmcm9tICdvbC9nZW9tL1NpbXBsZUdlb21ldHJ5JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTaW1wbGVHZW9tZXRyeTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzaW1wbGUtZ2VvbWV0cnknO1xyXG5cclxuICBASW5wdXQoKSBzcmlkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtYXA6IE1hcENvbXBvbmVudCwgcHJvdGVjdGVkIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEdlb21ldHJ5KHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnb2wvZ2VvbSc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LWNpcmNsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktY2lyY2xlJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IENpcmNsZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRSYWRpdXMoKTtcclxuICB9XHJcbiAgc2V0IHJhZGl1cyhyYWRpdXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXMocmFkaXVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xyXG4gICAgLy8gZGVmYXVsdGluZyBjb29yZGluYXRlcyB0byBbMCwwXS4gVG8gYmUgb3ZlcnJpZGRlbiBpbiBjaGlsZCBjb21wb25lbnQuXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZShbMCwgMF0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpbmVTdHJpbmcgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LWxpbmVzdHJpbmcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1saW5lc3RyaW5nJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IExpbmVTdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IExpbmVTdHJpbmcoW1swLCAwXSwgWzEsIDFdXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpTGluZVN0cmluZyB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlMaW5lU3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNdWx0aUxpbmVTdHJpbmcoW1tbMCwgMF0sIFsxLCAxXV1dKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlQb2ludCB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbXVsdGlwb2ludCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LW11bHRpcG9pbnQnO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlQb2ludChbWzAsIDBdLCBbMSwgMV1dKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlQb2x5Z29uIH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1tdWx0aXBvbHlnb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LW11bHRpcG9seWdvbic7XHJcbiAgcHVibGljIGluc3RhbmNlOiBNdWx0aVBvbHlnb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9seWdvbihbW1tbMCwgMF0sIFsxLCAxXSwgWzAsIDFdXV1dKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LXBvaW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVBvaW50Q29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LXBvaW50JztcclxuICBwdWJsaWMgaW5zdGFuY2U6IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQb2ludChbMCwgMF0pO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1wb2x5Z29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktcG9seWdvbic7XHJcbiAgcHVibGljIGluc3RhbmNlOiBQb2x5Z29uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQb2x5Z29uKFtbWzAsIDBdLCBbMSwgMV0sIFswLCAxXV1dKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udGVudCcsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlbnRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlcmxheSwgUGFuT3B0aW9ucyB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgT3ZlcmxheVBvc2l0aW9uaW5nIGZyb20gJ29sL092ZXJsYXlQb3NpdGlvbmluZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb21wb25lbnRUeXBlID0gJ292ZXJsYXknO1xyXG4gIGluc3RhbmNlOiBPdmVybGF5O1xyXG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50KVxyXG4gIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldDogbnVtYmVyW107XHJcbiAgQElucHV0KClcclxuICBwb3NpdGlvbmluZzogT3ZlcmxheVBvc2l0aW9uaW5nIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3RvcEV2ZW50OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW5zZXJ0Rmlyc3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBhdXRvUGFuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b1BhbkFuaW1hdGlvbjogUGFuT3B0aW9ucztcclxuICBASW5wdXQoKVxyXG4gIGF1dG9QYW5NYXJnaW46IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcmxheSh0aGlzKTtcclxuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkT3ZlcmxheSh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlT3ZlcmxheSh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9pbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb29yZGluYXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1jb29yZGluYXRlXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBob3N0OiBhbnk7XHJcbiAgcHJpdmF0ZSBtYXBTcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgeDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgeTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSB2aWV3SG9zdDogVmlld0NvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5UG9pbnRIb3N0OiBHZW9tZXRyeVBvaW50Q29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlDaXJjbGVIb3N0OiBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIG92ZXJsYXlIb3N0OiBPdmVybGF5Q29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29vcmRpbmF0ZScpO1xyXG4gICAgaWYgKGdlb21ldHJ5UG9pbnRIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5UG9pbnRIb3N0O1xyXG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeUNpcmNsZUhvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlDaXJjbGVIb3N0O1xyXG4gICAgfSBlbHNlIGlmICh2aWV3SG9zdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSB2aWV3SG9zdDtcclxuICAgIH0gZWxzZSBpZiAob3ZlcmxheUhvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gb3ZlcmxheUhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIGUgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcclxuICAgIHRoaXMubWFwU3JpZCA9IHRoaXMubWFwLmluc3RhbmNlXHJcbiAgICAgIC5nZXRWaWV3KClcclxuICAgICAgLmdldFByb2plY3Rpb24oKVxyXG4gICAgICAuZ2V0Q29kZSgpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSBldmVudC50YXJnZXRcclxuICAgICAgLmdldChldmVudC5rZXkpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogbnVtYmVyW107XHJcblxyXG4gICAgaWYgKHRoaXMuc3JpZCA9PT0gdGhpcy5tYXBTcmlkKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbdGhpcy54LCB0aGlzLnldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRyYW5zZm9ybShbdGhpcy54LCB0aGlzLnldLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xyXG4gICAgICBjYXNlICdnZW9tZXRyeS1wb2ludCc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdnZW9tZXRyeS1jaXJjbGUnOlxyXG4gICAgICBjYXNlICd2aWV3JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q2VudGVyKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdvdmVybGF5JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0UG9zaXRpb24odHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvbHlnb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9seWdvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlc1wiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBob3N0OiBhbnk7XHJcbiAgcHJpdmF0ZSBtYXBTcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcclxuICBASW5wdXQoKVxyXG4gIHNyaWQgPSAnRVBTRzozODU3JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlMaW5lc3RyaW5nOiBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvbHlnb246IEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2ludDogR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc6IEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aXBvbHlnb246IEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBpZiAoISFnZW9tZXRyeUxpbmVzdHJpbmcpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlMaW5lc3RyaW5nO1xyXG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5UG9seWdvbikge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeVBvbHlnb247XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvaW50KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlwb2ludDtcclxuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpbGluZXN0cmluZykge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpbGluZXN0cmluZztcclxuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpcG9seWdvbikge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9seWdvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMgbXVzdCBiZSBhIGNoaWxkIG9mIGEgZ2VvbWV0cnkgY29tcG9uZW50Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIGUgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcclxuICAgIHRoaXMubWFwU3JpZCA9IHRoaXMubWFwLmluc3RhbmNlXHJcbiAgICAgIC5nZXRWaWV3KClcclxuICAgICAgLmdldFByb2plY3Rpb24oKVxyXG4gICAgICAuZ2V0Q29kZSgpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSBldmVudC50YXJnZXRcclxuICAgICAgLmdldChldmVudC5rZXkpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogQ29vcmRpbmF0ZVtdIHwgQ29vcmRpbmF0ZVtdW10gfCBDb29yZGluYXRlW11bXVtdO1xyXG5cclxuICAgIGlmICh0aGlzLnNyaWQgPT09IHRoaXMubWFwU3JpZCkge1xyXG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1saW5lc3RyaW5nJzpcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aXBvaW50JzpcclxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAoPENvb3JkaW5hdGVbXT50aGlzLmNvb3JkaW5hdGVzKS5tYXAoYyA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LXBvbHlnb24nOlxyXG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpbGluZXN0cmluZyc6XHJcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKDxDb29yZGluYXRlW11bXT50aGlzLmNvb3JkaW5hdGVzKS5tYXAoY2MgPT5cclxuICAgICAgICAgICAgY2MubWFwKGMgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nOlxyXG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICg8Q29vcmRpbmF0ZVtdW11bXT50aGlzLmNvb3JkaW5hdGVzKS5tYXAoY2NjID0+XHJcbiAgICAgICAgICAgIGNjYy5tYXAoY2MgPT4gY2MubWFwKGMgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q29vcmRpbmF0ZXModHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsbCwgSW1hZ2UsIFN0cm9rZSwgU3R5bGUsIFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogRmVhdHVyZUNvbXBvbmVudCB8IExheWVyVmVjdG9yQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU3R5bGU7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5OiBzdHJpbmcgfCBHZW9tZXRyeSB8IEdlb21ldHJ5RnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBmaWxsOiBGaWxsO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2U6IEltYWdlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3Ryb2tlOiBTdHJva2U7XHJcbiAgQElucHV0KClcclxuICB0ZXh0OiBUZXh0O1xyXG4gIEBJbnB1dCgpXHJcbiAgekluZGV4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZlYXR1cmVIb3N0OiBGZWF0dXJlQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBsYXllckhvc3Q6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlJyk7XHJcbiAgICB0aGlzLmhvc3QgPSAhIWZlYXR1cmVIb3N0ID8gZmVhdHVyZUhvc3QgOiBsYXllckhvc3Q7XHJcbiAgICBpZiAoIXRoaXMuaG9zdCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZSBtdXN0IGJlIGFwcGxpZWQgdG8gYSBmZWF0dXJlIG9yIGEgbGF5ZXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBzdHlsZVxcJ3MgaG9zdDogJywgdGhpcy5ob3N0KTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5jaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0eWxlKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0eWxlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdGxhc01hbmFnZXIsIENpcmNsZSwgRmlsbCwgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWNpcmNsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUtY2lyY2xlJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IENpcmNsZTtcclxuXHJcbiAgQElucHV0KClcclxuICBmaWxsOiBGaWxsO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmFkaXVzOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHN0cm9rZTogU3Ryb2tlO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXRsYXNNYW5hZ2VyOiBBdGxhc01hbmFnZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogV09SSy1BUk9VTkQ6IHNpbmNlIHRoZSByZS1yZW5kZXJpbmcgaXMgbm90IHRyaWdnZXJlZCBvbiBzdHlsZSBjaGFuZ2VcclxuICAgKiB3ZSB0cmlnZ2VyIGEgcmFkaXVzIGNoYW5nZS5cclxuICAgKiBzZWUgb3BlbmxheWVycyAjNjIzMyBhbmQgIzU3NzVcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAoISF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlLkNpcmNsZSBpbnN0YW5jZVxcJ3MgcmFkaXVzJyk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHRoaXMucmFkaXVzKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZSh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcclxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sncmFkaXVzJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXMoY2hhbmdlc1sncmFkaXVzJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1jaXJjbGUsIHNldHRpbmcgbmV3IHJhZGl1czogJywgY2hhbmdlc1sncmFkaXVzJ10uY3VycmVudFZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1zdHlsZS1jaXJjbGUnKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZShudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtdGV4dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtdGV4dFwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBUZXh0O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLXRleHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZvbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldFg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldFk6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHNjYWxlOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB0ZXh0QWxpZ246IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHRleHRCYXNlTGluZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7XHJcbiAgICBpZiAoIWhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtdGV4dCBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtdGV4dCB3aXRoOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLlRleHQgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRleHQodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0VGV4dCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snZm9udCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Rm9udChjaGFuZ2VzWydmb250J10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydvZmZzZXRYJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRYKGNoYW5nZXNbJ29mZnNldFgnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ29mZnNldFknXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9mZnNldFkoY2hhbmdlc1snb2Zmc2V0WSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snc2NhbGUnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXNbJ3NjYWxlJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydyb3RhdGlvbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlc1sncm90YXRpb24nXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3RleHQnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHQoY2hhbmdlc1sndGV4dCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sndGV4dEFsaWduJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QWxpZ24oY2hhbmdlc1sndGV4dEFsaWduJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd0ZXh0QmFzZUxpbmUnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHRCYXNlbGluZShjaGFuZ2VzWyd0ZXh0QmFzZUxpbmUnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLXRleHQsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R5bGVDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHlsZVRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdvbC9jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1zdHJva2UnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXN0cm9rZVwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVN0cm9rZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFN0cm9rZTtcclxuICAvKiB0aGUgdHlwaW5ncyBkbyBub3QgaGF2ZSB0aGUgc2V0dGVycyAqL1xyXG4gIHByaXZhdGUgaG9zdDogLypTdHlsZUNvbXBvbmVudHxTdHlsZUNpcmNsZUNvbXBvbmVudHxTdHlsZVRleHRDb21wb25lbnQqLyBhbnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IENvbG9yIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGluZUNhcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGluZURhc2g6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGluZUpvaW46IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIG1pdGVyTGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVIb3N0OiBTdHlsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlQ2lyY2xlSG9zdDogU3R5bGVDaXJjbGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZVRleHRIb3N0OiBTdHlsZVRleHRDb21wb25lbnRcclxuICApIHtcclxuICAgIGlmICghc3R5bGVIb3N0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXN0cm9rZSBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcclxuICAgIH1cclxuICAgIGlmICghIXN0eWxlVGV4dEhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVUZXh0SG9zdDtcclxuICAgIH0gZWxzZSBpZiAoISFzdHlsZUNpcmNsZUhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVDaXJjbGVIb3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVIb3N0O1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZS1zdHJva2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5TdHJva2UgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0cm9rZSh0aGlzKTtcclxuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHJva2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUgaW5zdGFuY2VcXCdzIHN0cm9rZTonLCB0aGlzLmhvc3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdHlsZS10ZXh0JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3Ryb2tlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdHlsZS1jaXJjbGUnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5zdHJva2UgPSB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlLmNpcmNsZSBpbnN0YW5jZVxcJ3Mgc3Ryb2tlOicsIHRoaXMuaG9zdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGhvc3QgdHlwZTogJyArIHRoaXMuaG9zdCk7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydjb2xvciddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q29sb3IoY2hhbmdlc1snY29sb3InXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2xpbmVDYXAnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVDYXAoY2hhbmdlc1snbGluZUNhcCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snbGluZURhc2gnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVEYXNoKGNoYW5nZXNbJ2xpbmVEYXNoJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydsaW5lSm9pbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZUpvaW4oY2hhbmdlc1snbGluZUpvaW4nXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ21pdGVyTGltaXQnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldE1pdGVyTGltaXQoY2hhbmdlc1snbWl0ZXJMaW1pdCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snd2lkdGgnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFdpZHRoKGNoYW5nZXNbJ3dpZHRoJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1zdHJva2UsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgSWNvbkFuY2hvclVuaXRzIGZyb20gJ29sL3N0eWxlL0ljb25BbmNob3JVbml0cyc7XHJcbmltcG9ydCBJY29uT3JpZ2luIGZyb20gJ29sL3N0eWxlL0ljb25PcmlnaW4nO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWljb25cIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogSWNvbjtcclxuXHJcbiAgQElucHV0KClcclxuICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBhbmNob3JYVW5pdHM6IEljb25BbmNob3JVbml0cztcclxuICBASW5wdXQoKVxyXG4gIGFuY2hvcllVbml0czogSWNvbkFuY2hvclVuaXRzO1xyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yT3JpZ2luOiBJY29uT3JpZ2luO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW46IEljb25PcmlnaW47XHJcbiAgQElucHV0KClcclxuICBpbWc6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldDogW251bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldE9yaWdpbjogSWNvbk9yaWdpbjtcclxuICBASW5wdXQoKVxyXG4gIG9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNjYWxlOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcm90YXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3JjOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuSWNvbiBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snb3BhY2l0eSddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T3BhY2l0eShjaGFuZ2VzWydvcGFjaXR5J10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydyb3RhdGlvbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlc1sncm90YXRpb24nXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NjYWxlJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzWydzY2FsZSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snc3JjJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xyXG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxsIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R5bGVDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHlsZVRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdvbC9jb2xvcic7XHJcbmltcG9ydCB7IENvbG9yTGlrZSB9IGZyb20gJ29sL2NvbG9ybGlrZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1maWxsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1maWxsXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlRmlsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvKiB0aGUgdHlwaW5ncyBkbyBub3QgaGF2ZSB0aGUgc2V0dGVycyAqL1xyXG4gIHByaXZhdGUgaG9zdDogLypTdHlsZUNvbXBvbmVudHxTdHlsZUNpcmNsZUNvbXBvbmVudHxTdHlsZVRleHRDb21wb25lbnQqLyBhbnk7XHJcbiAgcHVibGljIGluc3RhbmNlOiBGaWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBDb2xvciB8IENvbG9yTGlrZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUhvc3Q6IFN0eWxlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVDaXJjbGVIb3N0OiBTdHlsZUNpcmNsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlVGV4dEhvc3Q6IFN0eWxlVGV4dENvbXBvbmVudFxyXG4gICkge1xyXG4gICAgaWYgKCFzdHlsZUhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtc3Ryb2tlIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhc3R5bGVUZXh0SG9zdCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZVRleHRIb3N0O1xyXG4gICAgfSBlbHNlIGlmICghIXN0eWxlQ2lyY2xlSG9zdCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZUNpcmNsZUhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZUhvc3Q7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLWZpbGwgd2l0aDogJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5GaWxsIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGaWxsKHRoaXMpO1xyXG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xyXG4gICAgICBjYXNlICdzdHlsZSc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEZpbGwodGhpcy5pbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUgaW5zdGFuY2VcXCdzIGZpbGw6JywgdGhpcy5ob3N0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3R5bGUtdGV4dCc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEZpbGwodGhpcy5pbnN0YW5jZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0eWxlLWNpcmNsZSc6XHJcbiAgICAgICAgdGhpcy5ob3N0LmZpbGwgPSB0aGlzLmluc3RhbmNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlLmNpcmNsZSBpbnN0YW5jZVxcJ3MgZmlsbDonLCB0aGlzLmhvc3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBob3N0IHR5cGU6ICcgKyB0aGlzLmhvc3QpO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snY29sb3InXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldENvbG9yKGNoYW5nZXNbJ2NvbG9yJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1maWxsLCBzZXR0aW5nIG5ldyBjb2xvcjogJywgY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2wsIGRlZmF1bHRzIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IE9wdGlvbnMgYXMgQXR0cmlidXRpb25PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9BdHRyaWJ1dGlvbic7XHJcbmltcG9ydCB7IE9wdGlvbnMgYXMgUm90YXRlT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvUm90YXRlJztcclxuaW1wb3J0IHsgT3B0aW9ucyBhcyBab29tT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvWm9vbSc7XHJcblxyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtZGVmYXVsdHMnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBDb2xsZWN0aW9uPENvbnRyb2w+O1xyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbk9wdGlvbnM6IEF0dHJpYnV0aW9uT3B0aW9ucztcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0ZU9wdGlvbnM6IFJvdGF0ZU9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICB6b29tOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbU9wdGlvbnM6IFpvb21PcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLmRlZmF1bHRzIGluaXQ6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGMgPT4gdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbChjKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1kZWZhdWx0cycpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGMgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbChjKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdjb250cm9sJztcclxuICBpbnN0YW5jZTogQ29udHJvbDtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudClcclxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb250cm9sKHRoaXMpO1xyXG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdjb250cm9sJztcclxuICBpbnN0YW5jZTogQXR0cmlidXRpb247XHJcbiAgdGFyZ2V0OiBFbGVtZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuQXR0cmlidXRpb24gaW5pdDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWF0dHJpYnV0aW9uJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1mdWxsc2NyZWVuJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRnVsbFNjcmVlbjtcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYWJlbEFjdGl2ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlwTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGtleXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLWZ1bGxzY3JlZW4nKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGdWxsU2NyZWVuKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWZ1bGxzY3JlZW4nKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBNb3VzZVBvc2l0aW9uIGZyb20gJ29sL2NvbnRyb2wvTW91c2VQb3NpdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlRm9ybWF0IH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLW1vdXNlcG9zaXRpb24nLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xNb3VzZVBvc2l0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBNb3VzZVBvc2l0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29vcmRpbmF0ZUZvcm1hdDogQ29vcmRpbmF0ZUZvcm1hdDtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIHRhcmdldDogRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uIGluaXQ6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb3VzZVBvc2l0aW9uKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLW1vdXNlcG9zaXRpb24nKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IE92ZXJ2aWV3TWFwIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1vdmVydmlld21hcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE92ZXJ2aWV3TWFwO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sbGFwc2VkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sbGFwc2VMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5ZXJzOiBMYXllcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGFyZ2V0OiBFbGVtZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlwTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHZpZXc6IFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVydmlld01hcCh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAhPSBudWxsICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3ZpZXcnKSkge1xyXG4gICAgICB0aGlzLnJlbG9hZEluc3RhbmNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbG9hZEluc3RhbmNlKCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3RhdGUgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXJvdGF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFJvdGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogUm90YXRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b0hpZGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXJvdGF0ZScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFJvdGF0ZSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNjYWxlTGluZSB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtc2NhbGVsaW5lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sU2NhbGVMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBTY2FsZUxpbmU7XHJcbiAgQElucHV0KClcclxuICB1bml0czogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1zY2FsZWxpbmUnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTY2FsZUxpbmUodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtc2NhbGVsaW5lJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBab29tIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogWm9vbTtcclxuXHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbUluTGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB6b29tT3V0TGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB6b29tSW5UaXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbU91dFRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkZWx0YTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBab29tU2xpZGVyIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tc2xpZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogWm9vbVNsaWRlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb21zbGlkZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBab29tU2xpZGVyKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXpvb21zbGlkZXInKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFpvb21Ub0V4dGVudCB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXRvZXh0ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBab29tVG9FeHRlbnQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nIHwgTm9kZTtcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbXRvZXh0ZW50Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbVRvRXh0ZW50KHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNVlQgfSBmcm9tICdvbC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgR2VvbWV0cnlUeXBlIGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWZvcm1hdC1tdnQnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEZvcm1hdENvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybWF0TVZUQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1hdE1WVENvbXBvbmVudCBleHRlbmRzIEZvcm1hdENvbXBvbmVudCB7XHJcbiAgaW5zdGFuY2U6IE1WVDtcclxuXHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlQ2xhc3M6XHJcbiAgICB8ICgoZ2VvbTogR2VvbWV0cnkgfCB7IFtrOiBzdHJpbmddOiBhbnkgfSkgPT4gYW55KVxyXG4gICAgfCAoKGdlb206IEdlb21ldHJ5VHlwZSwgYXJnMjogbnVtYmVyW10sIGFyZzM6IG51bWJlcltdIHwgbnVtYmVyW11bXSwgYXJnNDogeyBbazogc3RyaW5nXTogYW55IH0pID0+IGFueSk7XHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5ZXJzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNVlQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVmYXVsdHMsIEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRlZmF1bHQnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxJbnRlcmFjdGlvbj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goaSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbihpKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChpID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKGkpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG91YmxlQ2xpY2tab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRvdWJsZWNsaWNrem9vbScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG91YmxlQ2xpY2tab29tSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERvdWJsZUNsaWNrWm9vbTtcclxuXHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVsdGE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERvdWJsZUNsaWNrWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ0FuZERyb3AgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnYW5kZHJvcCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ0FuZERyb3A7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZm9ybWF0Q29uc3RydWN0b3JzOiAoKG46IEZlYXR1cmUpID0+IGFueSlbXTtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGFyZ2V0OiBFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdCb3ggfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuaW1wb3J0IHsgRW5kQ29uZGl0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhZ0JveCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnYm94JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnQm94SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYWdCb3g7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb246IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGJveEVuZENvbmRpdGlvbjogRW5kQ29uZGl0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ0JveCh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ1BhbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IEtpbmV0aWMgZnJvbSAnb2wvS2luZXRpYyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWdwYW4nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdQYW5JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ1BhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb246IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGtpbmV0aWM6IEtpbmV0aWM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnUGFuKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnUm90YXRlIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFncm90YXRlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnUm90YXRlSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYWdSb3RhdGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1JvdGF0ZSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ1JvdGF0ZUFuZFpvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWdyb3RhdGVhbmR6b29tJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnUm90YXRlQW5kWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnUm90YXRlQW5kWm9vbTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb246IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnUm90YXRlQW5kWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ1pvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWd6b29tJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnWm9vbTtcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG91dDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdab29tKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb3VzZVdoZWVsWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1tb3VzZXdoZWVsem9vbScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW91c2VXaGVlbFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogTW91c2VXaGVlbFpvb207XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGltZW91dDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXNlQW5jaG9yOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW91c2VXaGVlbFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpbmNoWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1waW5jaHpvb20nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBpbmNoWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBQaW5jaFpvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNvbnN0cmFpblJlc29sdXRpb246IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQaW5jaFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IEdlb21ldHJ5VHlwZSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcclxuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmF3JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYXc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XHJcbiAgQElucHV0KClcclxuICBzb3VyY2U/OiBWZWN0b3I7XHJcbiAgQElucHV0KClcclxuICBzbmFwVG9sZXJhbmNlPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdHlwZTogR2VvbWV0cnlUeXBlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4UG9pbnRzPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluUG9pbnRzPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmluaXNoQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IEdlb21ldHJ5RnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeU5hbWU/OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBmcmVlaGFuZENvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGZyZWVoYW5kPzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uRHJhd0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uRHJhd1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhdyh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkNoYW5nZUFjdGl2ZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3ZW5kJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25EcmF3RW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdzdGFydCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uRHJhd1N0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25Qcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFNlbGVjdEV2ZW50LCBGaWx0ZXJGdW5jdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1NlbGVjdCc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tc2VsZWN0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogU2VsZWN0O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFkZENvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XHJcbiAgQElucHV0KClcclxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICByZW1vdmVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICB0b2dnbGVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBtdWx0aT86IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XHJcbiAgQElucHV0KClcclxuICBmaWx0ZXI/OiBGaWx0ZXJGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNlbGVjdCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NlbGVjdCcsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHRoaXMub25TZWxlY3QuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RpZnkgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBNb2RpZnlFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeSc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tbW9kaWZ5JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RpZnlJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogTW9kaWZ5O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGRlbGV0ZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHBpeGVsVG9sZXJhbmNlPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM6IENvbGxlY3Rpb248RmVhdHVyZT47XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzb3VyY2U/OiBWZWN0b3I7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uTW9kaWZ5RW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbk1vZGlmeVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW9kaWZ5KHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbkNoYW5nZUFjdGl2ZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25Qcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnllbmQnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uTW9kaWZ5RW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeXN0YXJ0JywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbk1vZGlmeVN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vVHJhbnNsYXRlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi10cmFuc2xhdGUnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBUcmFuc2xhdGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcclxuICBASW5wdXQoKVxyXG4gIGhpdFRvbGVyYW5jZT86IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0ZUVuZDogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uVHJhbnNsYXRpbmc6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gICAgdGhpcy5vblRyYW5zbGF0ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVHJhbnNsYXRlKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25DaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlZW5kJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vblRyYW5zbGF0ZUVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGVzdGFydCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGVTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGluZycsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGluZy5lbWl0KGV2ZW50KSk7XHJcblxyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtYXR0cmlidXRpb24nLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xyXG4gIGh0bWw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXR0cmlidXRpb24odGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXR0cmlidXRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9ucycsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGluc3RhbmNlOiBBcnJheTxBdHRyaWJ1dGlvbj47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQXR0cmlidXRpb25Db21wb25lbnQpXHJcbiAgYXR0cmlidXRpb25zOiBRdWVyeUxpc3Q8QXR0cmlidXRpb25Db21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgc291cmNlOiBTb3VyY2VDb21wb25lbnQpIHt9XHJcblxyXG4gIC8qIHdlIGNhbiBkbyB0aGlzIGF0IHRoZSB2ZXJ5IGVuZCAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF0dHJpYnV0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuYXR0cmlidXRpb25zLm1hcChjbXAgPT4gY21wLmluc3RhbmNlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgYXR0cmlidXRpb25zOicsIHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVURkdyaWQgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXV0ZmdyaWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVVRGR3JpZENvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VVVEZHcmlkQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogVVRGR3JpZDtcclxuICBASW5wdXQoKSB0aWxlSlNPTjogSlNPTjtcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVVRGR3JpZCh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIGZvcndhcmRSZWYsIEhvc3QsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQcm9qZWN0aW9uTGlrZX0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQge1VybEZ1bmN0aW9ufSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCBzdHlsZWZ1bmN0aW9uIGZyb20gJ29sLW1hcGJveC1zdHlsZS9zdHlsZWZ1bmN0aW9uJztcbmltcG9ydCB7YXBwbHlTdHlsZSwgYXBwbHlCYWNrZ3JvdW5kfSBmcm9tICdvbC1tYXBib3gtc3R5bGUnO1xuaW1wb3J0IHtTb3VyY2VDb21wb25lbnR9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xheWVyVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHtTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuL3ZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLW1hcGJveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50KX1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHN0eWxlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc291cmNlTmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNwcml0ZUpzb25Vcmw6IHN0cmluZztcblxuICBASW5wdXQoKSBzcHJpdGVVcmw6IHN0cmluZztcblxuICBwcml2YXRlIHN0eWxlTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzcHJpdGVKc29uTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBnbFN0eWxlID0ge307XG5cbiAgcHJpdmF0ZSBzcHJpdGVEYXRhID0ge307XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50LCBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcblxuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5zdHlsZVVybCkuc3Vic2NyaWJlKHN0eWxlT2JqZWN0ID0+IHtcbiAgICAgIHRoaXMuZ2xTdHlsZSA9IHN0eWxlT2JqZWN0O1xuICAgICAgdGhpcy5zdHlsZUxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFwcGx5TWFwYm94U3R5bGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5zcHJpdGVKc29uVXJsKS5zdWJzY3JpYmUoc3ByaXRlRGF0YSA9PiB7XG4gICAgICB0aGlzLnNwcml0ZURhdGEgPSBzcHJpdGVEYXRhO1xuICAgICAgdGhpcy5zcHJpdGVKc29uTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBwbHlNYXBib3hTdHlsZSgpO1xuICAgIH0pO1xuICB9XG5cblxuICBhcHBseU1hcGJveFN0eWxlKCkge1xuICAgIC8vIHNldCB0aGUgbWFwYm94IHN0eWxlXG4gICAgaWYgKHRoaXMuc3ByaXRlSnNvbkxvYWRlZCAmJiB0aGlzLnN0eWxlTG9hZGVkKSB7XG4gICAgICBzdHlsZWZ1bmN0aW9uKHRoaXMuaG9zdC5pbnN0YW5jZSwgdGhpcy5nbFN0eWxlLCB0aGlzLnNvdXJjZU5hbWUsIHVuZGVmaW5lZCwgdGhpcy5zcHJpdGVEYXRhLCB0aGlzLnNwcml0ZVVybCk7XG4gICAgICBhcHBseUJhY2tncm91bmQodGhpcy5tYXAuaW5zdGFuY2UsIHRoaXMuZ2xTdHlsZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8qXHJcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZ3gtb3BlbmxheWVyc1xyXG4gKi9cclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1ZpZXdDb21wb25lbnR9IGZyb20gJy4vbGliL3ZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHtHcmF0aWN1bGVDb21wb25lbnR9IGZyb20gJy4vbGliL2dyYXRpY3VsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVyR3JvdXBDb21wb25lbnR9IGZyb20gJy4vbGliL2xheWVycy9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJJbWFnZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllclRpbGVDb21wb25lbnR9IGZyb20gJy4vbGliL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4vbGliL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVyVmVjdG9yQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllclZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4vbGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VPc21Db21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvb3NtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlQmluZ21hcHNDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvYmluZ21hcHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VDbHVzdGVyQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VWZWN0b3JDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlWFlaQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3h5ei5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVRpbGVXTVRTQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3RpbGV3bXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlVGlsZVdNU0NvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy90aWxld21zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlVGlsZUpTT05Db21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdGlsZWpzb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VHZW9KU09OQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL2dlb2pzb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VJbWFnZVN0YXRpY0NvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9pbWFnZXN0YXRpYy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZUltYWdlV01TQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL2ltYWdld21zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL2ltYWdlYXJjZ2lzcmVzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVJhc3RlckNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9yYXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGZWF0dXJlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlDaXJjbGVDb21wb25lbnR9IGZyb20gJy4vbGliL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnR9IGZyb20gJy4vbGliL2dlb20vZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnR9IGZyb20gJy4vbGliL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnR9IGZyb20gJy4vbGliL2dlb20vZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnR9IGZyb20gJy4vbGliL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtHZW9tZXRyeVBvaW50Q29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5cG9pbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtHZW9tZXRyeVBvbHlnb25Db21wb25lbnR9IGZyb20gJy4vbGliL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29vcmRpbmF0ZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29vcmRpbmF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25Db29yZGluYXRlc0NvbXBvbmVudH0gZnJvbSAnLi9saWIvY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVDb21wb25lbnR9IGZyb20gJy4vbGliL3N0eWxlcy9zdHlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlQ2lyY2xlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvY2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVTdHJva2VDb21wb25lbnR9IGZyb20gJy4vbGliL3N0eWxlcy9zdHJva2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdHlsZUljb25Db21wb25lbnR9IGZyb20gJy4vbGliL3N0eWxlcy9pY29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVGaWxsQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvZmlsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlVGV4dENvbXBvbmVudH0gZnJvbSAnLi9saWIvc3R5bGVzL3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHtEZWZhdWx0Q29udHJvbENvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvZGVmYXVsdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sQXR0cmlidXRpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL2F0dHJpYnV0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL2Z1bGxzY3JlZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvbW91c2Vwb3NpdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xPdmVydmlld01hcENvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvb3ZlcnZpZXdtYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sUm90YXRlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9yb3RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sU2NhbGVMaW5lQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9zY2FsZWxpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sWm9vbUNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xab29tU2xpZGVyQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFpvb21Ub0V4dGVudENvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvem9vbXRvZXh0ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9ybWF0TVZUQ29tcG9uZW50fSBmcm9tICcuL2xpYi9mb3JtYXRzL212dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RpbGVHcmlkQ29tcG9uZW50fSBmcm9tICcuL2xpYi90aWxlZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RpbGVHcmlkV01UU0NvbXBvbmVudH0gZnJvbSAnLi9saWIvdGlsZWdyaWR3bXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGVmYXVsdEludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RvdWJsZUNsaWNrWm9vbUludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3BJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RyYWdhbmRkcm9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ0JveEludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdQYW5JbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RyYWdwYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnUm90YXRlSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFncm90YXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ1JvdGF0ZUFuZFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RyYWdyb3RhdGVhbmR6b29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW91c2VXaGVlbFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL21vdXNld2hlZWx6b29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGluY2hab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9waW5jaHpvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmF3SW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmF3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtNb2RpZnlJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL21vZGlmeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZUludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvdHJhbnNsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T3ZlcmxheUNvbXBvbmVudH0gZnJvbSAnLi9saWIvb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtBdHRyaWJ1dGlvbnNDb21wb25lbnR9IGZyb20gJy4vbGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F0dHJpYnV0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVVURkdyaWRDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdXRmZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZU1hcGJveFZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvc291cmNlLW1hcGJveC12ZWN0b3ItdGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgTWFwQ29tcG9uZW50LFxyXG4gIFZpZXdDb21wb25lbnQsXHJcbiAgR3JhdGljdWxlQ29tcG9uZW50LFxyXG4gIExheWVyR3JvdXBDb21wb25lbnQsXHJcbiAgTGF5ZXJJbWFnZUNvbXBvbmVudCxcclxuICBMYXllclRpbGVDb21wb25lbnQsXHJcbiAgTGF5ZXJWZWN0b3JDb21wb25lbnQsXHJcbiAgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50LFxyXG4gIFNvdXJjZU9zbUNvbXBvbmVudCxcclxuICBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCxcclxuICBTb3VyY2VDbHVzdGVyQ29tcG9uZW50LFxyXG4gIFNvdXJjZVVURkdyaWRDb21wb25lbnQsXHJcbiAgU291cmNlVmVjdG9yQ29tcG9uZW50LFxyXG4gIFNvdXJjZVhZWkNvbXBvbmVudCxcclxuICBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVXTVNDb21wb25lbnQsXHJcbiAgU291cmNlVGlsZVdNVFNDb21wb25lbnQsXHJcbiAgU291cmNlVGlsZUpTT05Db21wb25lbnQsXHJcbiAgU291cmNlR2VvSlNPTkNvbXBvbmVudCxcclxuICBTb3VyY2VJbWFnZVN0YXRpY0NvbXBvbmVudCxcclxuICBTb3VyY2VJbWFnZVdNU0NvbXBvbmVudCxcclxuICBTb3VyY2VSYXN0ZXJDb21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50LFxyXG4gIEZlYXR1cmVDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudCxcclxuICBHZW9tZXRyeVBvaW50Q29tcG9uZW50LFxyXG4gIEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCxcclxuICBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCxcclxuICBDb29yZGluYXRlQ29tcG9uZW50LFxyXG4gIENvbGxlY3Rpb25Db29yZGluYXRlc0NvbXBvbmVudCxcclxuICBTdHlsZUNvbXBvbmVudCxcclxuICBTdHlsZUNpcmNsZUNvbXBvbmVudCxcclxuICBTdHlsZUZpbGxDb21wb25lbnQsXHJcbiAgU3R5bGVJY29uQ29tcG9uZW50LFxyXG4gIFN0eWxlU3Ryb2tlQ29tcG9uZW50LFxyXG4gIFN0eWxlVGV4dENvbXBvbmVudCxcclxuICBEZWZhdWx0Q29udHJvbENvbXBvbmVudCxcclxuICBDb250cm9sQ29tcG9uZW50LFxyXG4gIENvbnRyb2xBdHRyaWJ1dGlvbkNvbXBvbmVudCxcclxuICBDb250cm9sRnVsbFNjcmVlbkNvbXBvbmVudCxcclxuICBDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudCxcclxuICBDb250cm9sT3ZlcnZpZXdNYXBDb21wb25lbnQsXHJcbiAgQ29udHJvbFJvdGF0ZUNvbXBvbmVudCxcclxuICBDb250cm9sU2NhbGVMaW5lQ29tcG9uZW50LFxyXG4gIENvbnRyb2xab29tQ29tcG9uZW50LFxyXG4gIENvbnRyb2xab29tU2xpZGVyQ29tcG9uZW50LFxyXG4gIENvbnRyb2xab29tVG9FeHRlbnRDb21wb25lbnQsXHJcbiAgRm9ybWF0TVZUQ29tcG9uZW50LFxyXG4gIFRpbGVHcmlkQ29tcG9uZW50LFxyXG4gIFRpbGVHcmlkV01UU0NvbXBvbmVudCxcclxuICBEZWZhdWx0SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRG91YmxlQ2xpY2tab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ0FuZERyb3BJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnQm94SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1BhbkludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdSb3RhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnUm90YXRlQW5kWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgTW91c2VXaGVlbFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBQaW5jaFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmF3SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgVHJhbnNsYXRlSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgT3ZlcmxheUNvbXBvbmVudCxcclxuICBDb250ZW50Q29tcG9uZW50LFxyXG4gIEF0dHJpYnV0aW9uc0NvbXBvbmVudCxcclxuICBBdHRyaWJ1dGlvbkNvbXBvbmVudCxcclxuICBTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50XHJcbn07XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1xyXG4gIE1hcENvbXBvbmVudCxcclxuXHJcbiAgVmlld0NvbXBvbmVudCxcclxuICBHcmF0aWN1bGVDb21wb25lbnQsXHJcblxyXG4gIExheWVyR3JvdXBDb21wb25lbnQsXHJcbiAgTGF5ZXJJbWFnZUNvbXBvbmVudCxcclxuICBMYXllclRpbGVDb21wb25lbnQsXHJcbiAgTGF5ZXJWZWN0b3JDb21wb25lbnQsXHJcbiAgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50LFxyXG5cclxuICBTb3VyY2VPc21Db21wb25lbnQsXHJcbiAgU291cmNlQmluZ21hcHNDb21wb25lbnQsXHJcbiAgU291cmNlQ2x1c3RlckNvbXBvbmVudCxcclxuICBTb3VyY2VVVEZHcmlkQ29tcG9uZW50LFxyXG4gIFNvdXJjZVZlY3RvckNvbXBvbmVudCxcclxuICBTb3VyY2VYWVpDb21wb25lbnQsXHJcbiAgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlV01TQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVKU09OQ29tcG9uZW50LFxyXG4gIFNvdXJjZUdlb0pTT05Db21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VXTVNDb21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50LFxyXG4gIFNvdXJjZVJhc3RlckNvbXBvbmVudCxcclxuICBGZWF0dXJlQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQsXHJcbiAgR2VvbWV0cnlQb2ludENvbXBvbmVudCxcclxuICBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXHJcbiAgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsXHJcbiAgQ29vcmRpbmF0ZUNvbXBvbmVudCxcclxuICBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQsXHJcblxyXG4gIFN0eWxlQ29tcG9uZW50LFxyXG4gIFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxyXG4gIFN0eWxlRmlsbENvbXBvbmVudCxcclxuICBTdHlsZUljb25Db21wb25lbnQsXHJcbiAgU3R5bGVTdHJva2VDb21wb25lbnQsXHJcbiAgU3R5bGVUZXh0Q29tcG9uZW50LFxyXG5cclxuICBEZWZhdWx0Q29udHJvbENvbXBvbmVudCxcclxuICBDb250cm9sQ29tcG9uZW50LFxyXG4gIENvbnRyb2xBdHRyaWJ1dGlvbkNvbXBvbmVudCxcclxuICBDb250cm9sRnVsbFNjcmVlbkNvbXBvbmVudCxcclxuICBDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudCxcclxuICBDb250cm9sT3ZlcnZpZXdNYXBDb21wb25lbnQsXHJcbiAgQ29udHJvbFJvdGF0ZUNvbXBvbmVudCxcclxuICBDb250cm9sU2NhbGVMaW5lQ29tcG9uZW50LFxyXG4gIENvbnRyb2xab29tQ29tcG9uZW50LFxyXG4gIENvbnRyb2xab29tU2xpZGVyQ29tcG9uZW50LFxyXG4gIENvbnRyb2xab29tVG9FeHRlbnRDb21wb25lbnQsXHJcblxyXG4gIEZvcm1hdE1WVENvbXBvbmVudCxcclxuICBUaWxlR3JpZENvbXBvbmVudCxcclxuICBUaWxlR3JpZFdNVFNDb21wb25lbnQsXHJcblxyXG4gIERlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEb3VibGVDbGlja1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnQW5kRHJvcEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdCb3hJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnUGFuSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1JvdGF0ZUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdSb3RhdGVBbmRab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBNb3VzZVdoZWVsWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIFBpbmNoWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBNb2RpZnlJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuXHJcbiAgT3ZlcmxheUNvbXBvbmVudCxcclxuICBDb250ZW50Q29tcG9uZW50LFxyXG4gIEF0dHJpYnV0aW9uc0NvbXBvbmVudCxcclxuICBBdHRyaWJ1dGlvbkNvbXBvbmVudCxcclxuICBTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBleHBvcnRzOiBDT01QT05FTlRTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhck9wZW5sYXllcnNNb2R1bGUge1xyXG59XHJcbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJHcmF0aWN1bGUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkdyb3VwIiwiU2tpcFNlbGYiLCJPcHRpb25hbCIsIkltYWdlIiwiVGlsZSIsIlZlY3RvciIsIlZlY3RvclRpbGUiLCJjcmVhdGVYWVoiLCJsYXllciIsIlJhc3RlciIsImZvcndhcmRSZWYiLCJIb3N0IiwiWFlaIiwiQ29udGVudENoaWxkIiwiT1NNIiwiQmluZ01hcHMiLCJDbHVzdGVyIiwiV01UUyIsIlRpbGVXTVMiLCJUaWxlSlNPTiIsIkdlb0pTT04iLCJJbWFnZVN0YXRpYyIsIkltYWdlV01TIiwiSW1hZ2VBcmNHSVNSZXN0IiwiRmVhdHVyZSIsIkNpcmNsZSIsIkxpbmVTdHJpbmciLCJNdWx0aUxpbmVTdHJpbmciLCJNdWx0aVBvaW50IiwiTXVsdGlQb2x5Z29uIiwiUG9pbnQiLCJQb2x5Z29uIiwiT3ZlcmxheSIsInRyYW5zZm9ybSIsIlN0eWxlIiwiVGV4dCIsIlN0cm9rZSIsIkljb24iLCJGaWxsIiwiZGVmYXVsdHMiLCJDb250cm9sIiwiQXR0cmlidXRpb24iLCJGdWxsU2NyZWVuIiwiT3ZlcnZpZXdNYXAiLCJSb3RhdGUiLCJTY2FsZUxpbmUiLCJab29tIiwiWm9vbVNsaWRlciIsIlpvb21Ub0V4dGVudCIsIk1WVCIsIkRvdWJsZUNsaWNrWm9vbSIsIkRyYWdBbmREcm9wIiwiRHJhZ0JveCIsIkRyYWdQYW4iLCJEcmFnUm90YXRlIiwiRHJhZ1JvdGF0ZUFuZFpvb20iLCJEcmFnWm9vbSIsIk1vdXNlV2hlZWxab29tIiwiUGluY2hab29tIiwiRHJhdyIsIlNlbGVjdCIsIk1vZGlmeSIsIlRyYW5zbGF0ZSIsInNvdXJjZSIsIkNvbnRlbnRDaGlsZHJlbiIsIlVURkdyaWQiLCJodHRwIiwiYXBwbHlCYWNrZ3JvdW5kIiwiSHR0cENsaWVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7UUF3RUUsc0JBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUE1QzdCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1lBRzdCLFVBQUssR0FBRyxNQUFNLENBQUM7WUFFZixXQUFNLEdBQUcsTUFBTSxDQUFDOztZQW9DaEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztZQUN6QixpQkFB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