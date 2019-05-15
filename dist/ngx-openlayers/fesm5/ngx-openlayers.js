import { Component, ElementRef, Input, Output, EventEmitter, SkipSelf, Optional, forwardRef, Host, ContentChild, ContentChildren, NgModule } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import 'ol/extent';
import 'ol/coordinate';
import { Graticule, Feature, Overlay } from 'ol';
import { Stroke, Fill, Style, Text, Circle as Circle$1, Icon } from 'ol/style';
import { __extends } from 'tslib';
import { Group, Image, Tile, Vector, VectorTile } from 'ol/layer';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Raster, XYZ, OSM, BingMaps, Vector as Vector$1, Cluster, WMTS as WMTS$1, TileWMS, TileJSON, ImageStatic, ImageWMS, ImageArcGISRest, UTFGrid } from 'ol/source';
import 'ol/source/Raster';
import 'ol/Tile';
import 'ol/source/Source';
import 'ol/format/Feature';
import 'ol/source/Vector';
import WMTS from 'ol/tilegrid/WMTS';
import { transform } from 'ol/proj';
import VectorTile$1 from 'ol/source/VectorTile';
import { GeoJSON, MVT } from 'ol/format';
import 'ol/Image';
import 'ol/size';
import { Circle, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';
import 'ol/color';
import 'ol/style/IconAnchorUnits';
import 'ol/style/IconOrigin';
import { defaults, Control, Attribution, FullScreen, OverviewMap, Rotate, ScaleLine, Zoom, ZoomSlider, ZoomToExtent } from 'ol/control';
import 'ol/control/Attribution';
import 'ol/control/Rotate';
import 'ol/control/Zoom';
import MousePosition from 'ol/control/MousePosition';
import { defaults as defaults$1, DoubleClickZoom, DragAndDrop, DragBox, DragPan, DragRotate, DragRotateAndZoom, DragZoom, MouseWheelZoom, PinchZoom, Draw, Select, Modify, Translate } from 'ol/interaction';
import 'ol/events/condition';
import 'ol/interaction/DragBox';
import 'ol/Kinetic';
import 'ol/geom/GeometryType';
import 'ol/interaction/Draw';
import 'ol/interaction/Select';
import stylefunction from 'ol-mapbox-style/stylefunction';
import { applyBackground } from 'ol-mapbox-style';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
        this.onClick = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onMoveEnd = new EventEmitter();
        this.onPointerDrag = new EventEmitter();
        this.onPointerMove = new EventEmitter();
        this.onPostCompose = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreCompose = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
        this.onSingleClick = new EventEmitter();
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
        this.instance.on('click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onClick.emit(event); }));
        this.instance.on('dblclick', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDblClick.emit(event); }));
        this.instance.on('moveend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMoveEnd.emit(event); }));
        this.instance.on('pointerdrag', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPointerDrag.emit(event); }));
        this.instance.on('pointermove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPointerMove.emit(event); }));
        this.instance.on('postcompose', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPostCompose.emit(event); }));
        this.instance.on('postrender', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPostRender.emit(event); }));
        this.instance.on('precompose', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPreCompose.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('singleclick', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onSingleClick.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-map',
                    template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MapComponent.propDecorators = {
        width: [{ type: Input }],
        height: [{ type: Input }],
        pixelRatio: [{ type: Input }],
        keyboardEventTarget: [{ type: Input }],
        loadTilesWhileAnimating: [{ type: Input }],
        loadTilesWhileInteracting: [{ type: Input }],
        logo: [{ type: Input }],
        renderer: [{ type: Input }],
        onClick: [{ type: Output }],
        onDblClick: [{ type: Output }],
        onMoveEnd: [{ type: Output }],
        onPointerDrag: [{ type: Output }],
        onPointerMove: [{ type: Output }],
        onPostCompose: [{ type: Output }],
        onPostRender: [{ type: Output }],
        onPreCompose: [{ type: Output }],
        onPropertyChange: [{ type: Output }],
        onSingleClick: [{ type: Output }]
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
        this.onChangeZoom = new EventEmitter();
        this.onChangeResolution = new EventEmitter();
        this.onChangeCenter = new EventEmitter();
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
        this.instance.on('change:zoom', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChangeZoom.emit(event); }));
        this.instance.on('change:resolution', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChangeResolution.emit(event); }));
        this.instance.on('change:center', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChangeCenter.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-view',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ViewComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ViewComponent.propDecorators = {
        constrainRotation: [{ type: Input }],
        enableRotation: [{ type: Input }],
        extent: [{ type: Input }],
        maxResolution: [{ type: Input }],
        minResolution: [{ type: Input }],
        maxZoom: [{ type: Input }],
        minZoom: [{ type: Input }],
        resolution: [{ type: Input }],
        resolutions: [{ type: Input }],
        rotation: [{ type: Input }],
        zoom: [{ type: Input }],
        zoomFactor: [{ type: Input }],
        center: [{ type: Input }],
        projection: [{ type: Input }],
        zoomAnimation: [{ type: Input }],
        onChangeZoom: [{ type: Output }],
        onChangeResolution: [{ type: Output }],
        onChangeCenter: [{ type: Output }]
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
            this.instance = new Graticule(properties);
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
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-graticule',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    GraticuleComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    GraticuleComponent.propDecorators = {
        strokeStyle: [{ type: Input }],
        showLabels: [{ type: Input }],
        lonLabelPosition: [{ type: Input }],
        latLabelPosition: [{ type: Input }]
    };
    return GraticuleComponent;
}());

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
        opacity: [{ type: Input }],
        visible: [{ type: Input }],
        extent: [{ type: Input }],
        zIndex: [{ type: Input }],
        minResolution: [{ type: Input }],
        maxResolution: [{ type: Input }],
        precompose: [{ type: Input }],
        postcompose: [{ type: Input }]
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
        this.instance = new Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-layer-group',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerGroupComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
    ]; };
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
        this.instance = new Image(this);
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
        { type: Component, args: [{
                    selector: 'aol-layer-image',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerImageComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    LayerImageComponent.propDecorators = {
        opacity: [{ type: Input }],
        visible: [{ type: Input }],
        extent: [{ type: Input }],
        minResolution: [{ type: Input }],
        maxResolution: [{ type: Input }],
        zIndex: [{ type: Input }]
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
        this.instance = new Tile(this);
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
        { type: Component, args: [{
                    selector: 'aol-layer-tile',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    LayerTileComponent.propDecorators = {
        preload: [{ type: Input }],
        useInterimTilesOnError: [{ type: Input }]
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
        this.instance = new Vector(this);
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
        { type: Component, args: [{
                    selector: 'aol-layer-vector',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerVectorComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    LayerVectorComponent.propDecorators = {
        renderBuffer: [{ type: Input }],
        style: [{ type: Input }],
        updateWhileAnimating: [{ type: Input }],
        updateWhileInteracting: [{ type: Input }]
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
        this.instance = new VectorTile(this);
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
        { type: Component, args: [{
                    selector: 'aol-layer-vectortile',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerVectorTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    LayerVectorTileComponent.propDecorators = {
        renderBuffer: [{ type: Input }],
        renderMode: [{ type: Input }],
        renderOrder: [{ type: Input }],
        style: [{ type: Input }],
        updateWhileAnimating: [{ type: Input }],
        updateWhileInteracting: [{ type: Input }],
        visible: [{ type: Input }],
        declutter: [{ type: Input }]
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
        attributions: [{ type: Input }]
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
            this.instance = createXYZ(this);
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
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    TileGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-tilegrid',
                    template: '',
                },] },
    ];
    TileGridComponent.propDecorators = {
        extent: [{ type: Input }],
        maxZoom: [{ type: Input }],
        minZoom: [{ type: Input }],
        tileSize: [{ type: Input }],
        origin: [{ type: Input }],
        resolutions: [{ type: Input }]
    };
    return TileGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceRasterComponent = /** @class */ (function (_super) {
    __extends(SourceRasterComponent, _super);
    function SourceRasterComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.beforeOperations = new EventEmitter();
        _this.afterOperations = new EventEmitter();
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
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.beforeOperations.emit(event); }));
        this.instance.on('afteroperations', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.afterOperations.emit(event); }));
        this._register(this.instance);
    };
    SourceRasterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-raster',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [
                        {
                            provide: SourceComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceRasterComponent; })),
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    SourceRasterComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    SourceRasterComponent.propDecorators = {
        operation: [{ type: Input }],
        threads: [{ type: Input }],
        lib: [{ type: Input }],
        operationType: [{ type: Input }],
        beforeOperations: [{ type: Output }],
        afterOperations: [{ type: Output }]
    };
    return SourceRasterComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceXYZComponent = /** @class */ (function (_super) {
    __extends(SourceXYZComponent, _super);
    function SourceXYZComponent(layer, raster) {
        var _this = _super.call(this, layer, raster) || this;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
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
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadStart.emit(event); }));
        this.instance.on('tileloadend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadEnd.emit(event); }));
        this.instance.on('tileloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadError.emit(event); }));
        this._register(this.instance);
    };
    SourceXYZComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-xyz',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceXYZComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceXYZComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: SourceRasterComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    SourceXYZComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        opaque: [{ type: Input }],
        projection: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        minZoom: [{ type: Input }],
        maxZoom: [{ type: Input }],
        tileGrid: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        tilePixelRatio: [{ type: Input }],
        tileSize: [{ type: Input }],
        tileUrlFunction: [{ type: Input }],
        url: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }],
        tileGridXYZ: [{ type: ContentChild, args: [TileGridComponent,] }],
        tileLoadStart: [{ type: Output }],
        tileLoadEnd: [{ type: Output }],
        tileLoadError: [{ type: Output }]
    };
    return SourceXYZComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceOsmComponent = /** @class */ (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer, raster) {
        var _this = _super.call(this, layer, raster) || this;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
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
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadStart.emit(event); }));
        this.instance.on('tileloadend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadEnd.emit(event); }));
        this.instance.on('tileloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.tileLoadError.emit(event); }));
        this._register(this.instance);
    };
    SourceOsmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-osm',
                    template: "\n    <div class=\"aol-source-osm\"></div>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceOsmComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceOsmComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: SourceRasterComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    SourceOsmComponent.propDecorators = {
        attributions: [{ type: Input }],
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        maxZoom: [{ type: Input }],
        opaque: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        url: [{ type: Input }],
        wrapX: [{ type: Input }],
        tileLoadStart: [{ type: Output }],
        tileLoadEnd: [{ type: Output }],
        tileLoadError: [{ type: Output }]
    };
    return SourceOsmComponent;
}(SourceXYZComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceBingmapsComponent = /** @class */ (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        var _this = _super.call(this, layer) || this;
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
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    SourceBingmapsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-bingmaps',
                    template: "\n    <div class=\"aol-source-bingmaps\"></div>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceBingmapsComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceBingmapsComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceBingmapsComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        hidpi: [{ type: Input }],
        culture: [{ type: Input }],
        key: [{ type: Input }],
        imagerySet: [{ type: Input }],
        maxZoom: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        wrapX: [{ type: Input }]
    };
    return SourceBingmapsComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceVectorComponent = /** @class */ (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceVectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-vector',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceVectorComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceVectorComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    SourceVectorComponent.propDecorators = {
        overlaps: [{ type: Input }],
        useSpatialIndex: [{ type: Input }],
        wrapX: [{ type: Input }],
        url: [{ type: Input }],
        format: [{ type: Input }],
        strategy: [{ type: Input }]
    };
    return SourceVectorComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceClusterComponent = /** @class */ (function (_super) {
    __extends(SourceClusterComponent, _super);
    function SourceClusterComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceClusterComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    };
    SourceClusterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-cluster',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceClusterComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceClusterComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    SourceClusterComponent.propDecorators = {
        distance: [{ type: Input }],
        geometryFunction: [{ type: Input }],
        wrapX: [{ type: Input }],
        sourceVectorComponent: [{ type: ContentChild, args: [SourceVectorComponent,] }]
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
        { type: Component, args: [{
                    selector: 'aol-tilegrid-wmts',
                    template: '',
                },] },
    ];
    TileGridWMTSComponent.propDecorators = {
        origin: [{ type: Input }],
        origins: [{ type: Input }],
        resolutions: [{ type: Input }],
        matrixIds: [{ type: Input }],
        sizes: [{ type: Input }],
        tileSizes: [{ type: Input }],
        widths: [{ type: Input }]
    };
    return TileGridWMTSComponent;
}(TileGridComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceTileWMTSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMTSComponent, _super);
    function SourceTileWMTSComponent(layer) {
        return _super.call(this, layer) || this;
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
        this.instance = new WMTS$1(this);
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
        { type: Component, args: [{
                    selector: 'aol-source-tilewmts',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceTileWMTSComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceTileWMTSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceTileWMTSComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        tileGrid: [{ type: Input }],
        projection: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        requestEncoding: [{ type: Input }],
        layer: [{ type: Input }],
        style: [{ type: Input }],
        tileClass: [{ type: Input }],
        tilePixelRatio: [{ type: Input }],
        version: [{ type: Input }],
        format: [{ type: Input }],
        matrixSet: [{ type: Input }],
        dimensions: [{ type: Input }],
        url: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }],
        tileGridWMTS: [{ type: ContentChild, args: [TileGridWMTSComponent,] }]
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
    function SourceVectorTileComponent(layer) {
        return _super.call(this, layer) || this;
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
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-vectortile',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceVectorTileComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceVectorTileComponent.ctorParameters = function () { return [
        { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceVectorTileComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        overlaps: [{ type: Input }],
        projection: [{ type: Input }],
        tilePixelRatio: [{ type: Input }],
        tileUrlFunction: [{ type: Input }],
        url: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }],
        formatComponent: [{ type: ContentChild, args: [FormatComponent,] }],
        tileGridComponent: [{ type: ContentChild, args: [TileGridComponent,] }]
    };
    return SourceVectorTileComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceTileWMSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceTileWMSComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new TileWMS(this);
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
        { type: Component, args: [{
                    selector: 'aol-source-tilewms',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceTileWMSComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceTileWMSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceTileWMSComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        gutter: [{ type: Input }],
        hidpi: [{ type: Input }],
        params: [{ type: Input }],
        projection: [{ type: Input }],
        reprojectionErrorThreshold: [{ type: Input }],
        serverType: [{ type: Input }],
        tileGrid: [{ type: Input }],
        tileLoadFunction: [{ type: Input }],
        url: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }]
    };
    return SourceTileWMSComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceTileJSONComponent = /** @class */ (function (_super) {
    __extends(SourceTileJSONComponent, _super);
    function SourceTileJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceTileJSONComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileJSONComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-tilejson',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceTileJSONComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceTileJSONComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceTileJSONComponent.propDecorators = {
        url: [{ type: Input }]
    };
    return SourceTileJSONComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceGeoJSONComponent = /** @class */ (function (_super) {
    __extends(SourceGeoJSONComponent, _super);
    function SourceGeoJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceGeoJSONComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    };
    SourceGeoJSONComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-geojson',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceGeoJSONComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceGeoJSONComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    SourceGeoJSONComponent.propDecorators = {
        defaultDataProjection: [{ type: Input }],
        featureProjection: [{ type: Input }],
        geometryName: [{ type: Input }],
        url: [{ type: Input }]
    };
    return SourceGeoJSONComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceImageStaticComponent = /** @class */ (function (_super) {
    __extends(SourceImageStaticComponent, _super);
    function SourceImageStaticComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.onImageLoadStart = new EventEmitter();
        _this.onImageLoadEnd = new EventEmitter();
        _this.onImageLoadError = new EventEmitter();
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
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadStart.emit(event); }));
        this.instance.on('imageloadend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadEnd.emit(event); }));
        this.instance.on('imageloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadError.emit(event); }));
    };
    SourceImageStaticComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-imagestatic',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceImageStaticComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceImageStaticComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    SourceImageStaticComponent.propDecorators = {
        projection: [{ type: Input }],
        imageExtent: [{ type: Input }],
        url: [{ type: Input }],
        attributions: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        imageLoadFunction: [{ type: Input }],
        imageSize: [{ type: Input }],
        onImageLoadStart: [{ type: Output }],
        onImageLoadEnd: [{ type: Output }],
        onImageLoadError: [{ type: Output }]
    };
    return SourceImageStaticComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceImageWMSComponent = /** @class */ (function (_super) {
    __extends(SourceImageWMSComponent, _super);
    function SourceImageWMSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.onImageLoadStart = new EventEmitter();
        _this.onImageLoadEnd = new EventEmitter();
        _this.onImageLoadError = new EventEmitter();
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
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadStart.emit(event); }));
        this.instance.on('imageloadend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadEnd.emit(event); }));
        this.instance.on('imageloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadError.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-source-imagewms',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceImageWMSComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceImageWMSComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    SourceImageWMSComponent.propDecorators = {
        attributions: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        hidpi: [{ type: Input }],
        serverType: [{ type: Input }],
        imageLoadFunction: [{ type: Input }],
        params: [{ type: Input }],
        projection: [{ type: Input }],
        ratio: [{ type: Input }],
        resolutions: [{ type: Input }],
        url: [{ type: Input }],
        onImageLoadStart: [{ type: Output }],
        onImageLoadEnd: [{ type: Output }],
        onImageLoadError: [{ type: Output }]
    };
    return SourceImageWMSComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
    __extends(SourceImageArcGISRestComponent, _super);
    function SourceImageArcGISRestComponent(layer) {
        var _this = _super.call(this, layer) || this;
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
        this.instance = new ImageArcGISRest(this);
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
        { type: Component, args: [{
                    selector: 'aol-source-imagearcgisrest',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceImageArcGISRestComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceImageArcGISRestComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    SourceImageArcGISRestComponent.propDecorators = {
        projection: [{ type: Input }],
        url: [{ type: Input }],
        attributions: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        imageLoadFunction: [{ type: Input }],
        params: [{ type: Input }],
        ratio: [{ type: Input }],
        resolutions: [{ type: Input }],
        wrapX: [{ type: Input }]
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
        this.instance = new Feature();
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
        { type: Component, args: [{
                    selector: 'aol-feature',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    FeatureComponent.ctorParameters = function () { return [
        { type: SourceVectorComponent }
    ]; };
    FeatureComponent.propDecorators = {
        id: [{ type: Input }]
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
        srid: [{ type: Input }]
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
        _this.instance = new Circle([0, 0]);
        return _this;
    }
    Object.defineProperty(GeometryCircleComponent.prototype, "radius", {
        get: /**
         * @return {?}
         */
        function () {
            return this.instance.getRadius();
        },
        set: /**
         * @param {?} radius
         * @return {?}
         */
        function (radius) {
            this.instance.setRadius(radius);
        },
        enumerable: true,
        configurable: true
    });
    GeometryCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-circle',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryCircleComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryCircleComponent.propDecorators = {
        radius: [{ type: Input }]
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
        this.instance = new LineString([[0, 0], [1, 1]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryLinestringComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-linestring',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryLinestringComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
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
        this.instance = new MultiLineString([[[0, 0], [1, 1]]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiLinestringComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-multilinestring',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryMultiLinestringComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
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
        this.instance = new MultiPoint([[0, 0], [1, 1]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiPointComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-multipoint',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryMultiPointComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
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
        this.instance = new MultiPolygon([[[[0, 0], [1, 1], [0, 1]]]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiPolygonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-multipolygon',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryMultiPolygonComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
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
        this.instance = new Point([0, 0]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPointComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-point',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryPointComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
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
        this.instance = new Polygon([[[0, 0], [1, 1], [0, 1]]]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPolygonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-geometry-polygon',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    GeometryPolygonComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
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
        { type: Component, args: [{
                    selector: 'aol-content',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    ContentComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
            this.instance = new Overlay(this);
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
        { type: Component, args: [{
                    selector: 'aol-overlay',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    OverlayComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    OverlayComponent.propDecorators = {
        content: [{ type: ContentChild, args: [ContentComponent,] }],
        id: [{ type: Input }],
        offset: [{ type: Input }],
        positioning: [{ type: Input }],
        stopEvent: [{ type: Input }],
        insertFirst: [{ type: Input }],
        autoPan: [{ type: Input }],
        autoPanAnimation: [{ type: Input }],
        autoPanMargin: [{ type: Input }]
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
        this.map.instance.on('change:view', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.onMapViewChanged(e); }));
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
            transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
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
        { type: Component, args: [{
                    selector: 'aol-coordinate',
                    template: "\n    <div class=\"aol-coordinate\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    CoordinateComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ViewComponent, decorators: [{ type: Optional }] },
        { type: GeometryPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
        { type: OverlayComponent, decorators: [{ type: Optional }] }
    ]; };
    CoordinateComponent.propDecorators = {
        x: [{ type: Input }],
        y: [{ type: Input }],
        srid: [{ type: Input }]
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
        this.map.instance.on('change:view', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.onMapViewChanged(e); }));
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
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return transform(c, _this.srid, _this.mapSrid); }));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} cc
                     * @return {?}
                     */
                    function (cc) {
                        return cc.map((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return transform(c, _this.srid, _this.mapSrid); }));
                    }));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} ccc
                     * @return {?}
                     */
                    function (ccc) {
                        return ccc.map((/**
                         * @param {?} cc
                         * @return {?}
                         */
                        function (cc) { return cc.map((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return transform(c, _this.srid, _this.mapSrid); })); }));
                    }));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    };
    CollectionCoordinatesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-collection-coordinates',
                    template: "\n    <div class=\"aol-collection-coordinates\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    CollectionCoordinatesComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
    ]; };
    CollectionCoordinatesComponent.propDecorators = {
        coordinates: [{ type: Input }],
        srid: [{ type: Input }]
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
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleComponent.ctorParameters = function () { return [
        { type: FeatureComponent, decorators: [{ type: Optional }] },
        { type: LayerVectorComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleComponent.propDecorators = {
        geometry: [{ type: Input }],
        fill: [{ type: Input }],
        image: [{ type: Input }],
        stroke: [{ type: Input }],
        text: [{ type: Input }],
        zIndex: [{ type: Input }]
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
        this.instance = new Circle$1(this);
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
        { type: Component, args: [{
                    selector: 'aol-style-circle',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleCircleComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    StyleCircleComponent.propDecorators = {
        fill: [{ type: Input }],
        radius: [{ type: Input }],
        snapToPixel: [{ type: Input }],
        stroke: [{ type: Input }],
        atlasManager: [{ type: Input }]
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
        this.instance = new Text(this);
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
        { type: Component, args: [{
                    selector: 'aol-style-text',
                    template: "\n    <div class=\"aol-style-text\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleTextComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleTextComponent.propDecorators = {
        font: [{ type: Input }],
        offsetX: [{ type: Input }],
        offsetY: [{ type: Input }],
        scale: [{ type: Input }],
        rotateWithView: [{ type: Input }],
        rotation: [{ type: Input }],
        text: [{ type: Input }],
        textAlign: [{ type: Input }],
        textBaseLine: [{ type: Input }]
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
        this.instance = new Stroke(this);
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
        { type: Component, args: [{
                    selector: 'aol-style-stroke',
                    template: "\n    <div class=\"aol-style-stroke\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleStrokeComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Optional }] },
        { type: StyleCircleComponent, decorators: [{ type: Optional }] },
        { type: StyleTextComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleStrokeComponent.propDecorators = {
        color: [{ type: Input }],
        lineCap: [{ type: Input }],
        lineDash: [{ type: Input }],
        lineJoin: [{ type: Input }],
        miterLimit: [{ type: Input }],
        width: [{ type: Input }]
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
        this.instance = new Icon(this);
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
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    StyleIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style-icon',
                    template: "\n    <div class=\"aol-style-icon\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleIconComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    StyleIconComponent.propDecorators = {
        anchor: [{ type: Input }],
        anchorXUnits: [{ type: Input }],
        anchorYUnits: [{ type: Input }],
        anchorOrigin: [{ type: Input }],
        color: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        img: [{ type: Input }],
        offset: [{ type: Input }],
        offsetOrigin: [{ type: Input }],
        opacity: [{ type: Input }],
        scale: [{ type: Input }],
        snapToPixel: [{ type: Input }],
        rotateWithView: [{ type: Input }],
        rotation: [{ type: Input }],
        size: [{ type: Input }],
        imgSize: [{ type: Input }],
        src: [{ type: Input }]
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
        this.instance = new Fill(this);
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
        { type: Component, args: [{
                    selector: 'aol-style-fill',
                    template: "\n    <div class=\"aol-style-fill\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleFillComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Optional }] },
        { type: StyleCircleComponent, decorators: [{ type: Optional }] },
        { type: StyleTextComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleFillComponent.propDecorators = {
        color: [{ type: Input }]
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
        this.instance = defaults(this);
        this.instance.forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return _this.map.instance.addControl(c); }));
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
        this.instance.forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return _this.map.instance.removeControl(c); }));
    };
    DefaultControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-defaults',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DefaultControlComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DefaultControlComponent.propDecorators = {
        attribution: [{ type: Input }],
        attributionOptions: [{ type: Input }],
        rotate: [{ type: Input }],
        rotateOptions: [{ type: Input }],
        zoom: [{ type: Input }],
        zoomOptions: [{ type: Input }]
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
            this.instance = new Control(this);
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
        { type: Component, args: [{
                    selector: 'aol-control',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlComponent.propDecorators = {
        content: [{ type: ContentChild, args: [ContentComponent,] }]
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
        this.instance = new Attribution(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-attribution',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    ControlAttributionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    ControlAttributionComponent.propDecorators = {
        collapsible: [{ type: Input }]
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
        this.instance = new FullScreen(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-fullscreen',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlFullScreenComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlFullScreenComponent.propDecorators = {
        className: [{ type: Input }],
        label: [{ type: Input }],
        labelActive: [{ type: Input }],
        tipLabel: [{ type: Input }],
        keys: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'aol-control-mouseposition',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    ControlMousePositionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    ControlMousePositionComponent.propDecorators = {
        coordinateFormat: [{ type: Input }],
        projection: [{ type: Input }]
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
        this.instance = new OverviewMap(this);
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
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-overviewmap',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlOverviewMapComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlOverviewMapComponent.propDecorators = {
        collapsed: [{ type: Input }],
        collapseLabel: [{ type: Input }],
        collapsible: [{ type: Input }],
        label: [{ type: Input }],
        layers: [{ type: Input }],
        target: [{ type: Input }],
        tipLabel: [{ type: Input }],
        view: [{ type: Input }]
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
        this.instance = new Rotate(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-rotate',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlRotateComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlRotateComponent.propDecorators = {
        className: [{ type: Input }],
        label: [{ type: Input }],
        tipLabel: [{ type: Input }],
        duration: [{ type: Input }],
        autoHide: [{ type: Input }]
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
        this.instance = new ScaleLine(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-scaleline',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlScaleLineComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlScaleLineComponent.propDecorators = {
        units: [{ type: Input }]
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
        this.instance = new Zoom(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-zoom',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlZoomComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlZoomComponent.propDecorators = {
        duration: [{ type: Input }],
        zoomInLabel: [{ type: Input }],
        zoomOutLabel: [{ type: Input }],
        zoomInTipLabel: [{ type: Input }],
        zoomOutTipLabel: [{ type: Input }],
        delta: [{ type: Input }]
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
        this.instance = new ZoomSlider(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-zoomslider',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlZoomSliderComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlZoomSliderComponent.propDecorators = {
        className: [{ type: Input }],
        duration: [{ type: Input }],
        maxResolution: [{ type: Input }],
        minResolution: [{ type: Input }]
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
        this.instance = new ZoomToExtent(this);
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
        { type: Component, args: [{
                    selector: 'aol-control-zoomtoextent',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlZoomToExtentComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlZoomToExtentComponent.propDecorators = {
        className: [{ type: Input }],
        label: [{ type: Input }],
        tipLabel: [{ type: Input }],
        extent: [{ type: Input }]
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
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-format-mvt',
                    template: '',
                    providers: [{ provide: FormatComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FormatMVTComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    FormatMVTComponent.ctorParameters = function () { return []; };
    FormatMVTComponent.propDecorators = {
        featureClass: [{ type: Input }],
        geometryName: [{ type: Input }],
        layerName: [{ type: Input }],
        layers: [{ type: Input }]
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
        this.instance = defaults$1();
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return _this.map.instance.addInteraction(i); }));
    };
    /**
     * @return {?}
     */
    DefaultInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return _this.map.instance.removeInteraction(i); }));
    };
    DefaultInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-default',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DefaultInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
        this.instance = new DoubleClickZoom(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-doubleclickzoom',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DoubleClickZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DoubleClickZoomInteractionComponent.propDecorators = {
        duration: [{ type: Input }],
        delta: [{ type: Input }]
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
        this.instance = new DragAndDrop(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-draganddrop',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragAndDropInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragAndDropInteractionComponent.propDecorators = {
        formatConstructors: [{ type: Input }],
        projection: [{ type: Input }],
        target: [{ type: Input }]
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
        this.instance = new DragBox(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-dragbox',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragBoxInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragBoxInteractionComponent.propDecorators = {
        className: [{ type: Input }],
        condition: [{ type: Input }],
        boxEndCondition: [{ type: Input }]
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
        this.instance = new DragPan(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-dragpan',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragPanInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragPanInteractionComponent.propDecorators = {
        condition: [{ type: Input }],
        kinetic: [{ type: Input }]
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
        this.instance = new DragRotate(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-dragrotate',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragRotateInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragRotateInteractionComponent.propDecorators = {
        condition: [{ type: Input }],
        duration: [{ type: Input }]
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
        this.instance = new DragRotateAndZoom(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-dragrotateandzoom',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragRotateAndZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragRotateAndZoomInteractionComponent.propDecorators = {
        condition: [{ type: Input }],
        duration: [{ type: Input }]
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
        this.instance = new DragZoom(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-dragzoom',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DragZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DragZoomInteractionComponent.propDecorators = {
        className: [{ type: Input }],
        condition: [{ type: Input }],
        duration: [{ type: Input }],
        out: [{ type: Input }]
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
        this.instance = new MouseWheelZoom(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-mousewheelzoom',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    MouseWheelZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    MouseWheelZoomInteractionComponent.propDecorators = {
        duration: [{ type: Input }],
        timeout: [{ type: Input }],
        useAnchor: [{ type: Input }]
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
        this.instance = new PinchZoom(this);
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
        { type: Component, args: [{
                    selector: 'aol-interaction-pinchzoom',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    PinchZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    PinchZoomInteractionComponent.propDecorators = {
        duration: [{ type: Input }],
        constrainResolution: [{ type: Input }]
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
        this.onChange = new EventEmitter();
        this.onChangeActive = new EventEmitter();
        this.onDrawEnd = new EventEmitter();
        this.onDrawStart = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DrawInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Draw(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('change:active', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChangeActive.emit(event); }));
        this.instance.on('drawend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDrawEnd.emit(event); }));
        this.instance.on('drawstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDrawStart.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-interaction-draw',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DrawInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DrawInteractionComponent.propDecorators = {
        clickTolerance: [{ type: Input }],
        features: [{ type: Input }],
        source: [{ type: Input }],
        snapTolerance: [{ type: Input }],
        type: [{ type: Input }],
        maxPoints: [{ type: Input }],
        minPoints: [{ type: Input }],
        finishCondition: [{ type: Input }],
        style: [{ type: Input }],
        geometryFunction: [{ type: Input }],
        geometryName: [{ type: Input }],
        condition: [{ type: Input }],
        freehandCondition: [{ type: Input }],
        freehand: [{ type: Input }],
        wrapX: [{ type: Input }],
        onChange: [{ type: Output }],
        onChangeActive: [{ type: Output }],
        onDrawEnd: [{ type: Output }],
        onDrawStart: [{ type: Output }],
        onPropertyChange: [{ type: Output }]
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
        this.onChange = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SelectInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Select(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('select', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onSelect.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-interaction-select',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    SelectInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    SelectInteractionComponent.propDecorators = {
        addCondition: [{ type: Input }],
        condition: [{ type: Input }],
        layers: [{ type: Input }],
        style: [{ type: Input }],
        removeCondition: [{ type: Input }],
        toggleCondition: [{ type: Input }],
        multi: [{ type: Input }],
        features: [{ type: Input }],
        filter: [{ type: Input }],
        wrapX: [{ type: Input }],
        onChange: [{ type: Output }],
        onSelect: [{ type: Output }],
        onPropertyChange: [{ type: Output }]
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
        this.onModifyEnd = new EventEmitter();
        this.onModifyStart = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangeActive = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ModifyInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Modify(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('change:active', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChangeActive.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('modifyend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onModifyEnd.emit(event); }));
        this.instance.on('modifystart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onModifyStart.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-interaction-modify',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    ModifyInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ModifyInteractionComponent.propDecorators = {
        condition: [{ type: Input }],
        deleteCondition: [{ type: Input }],
        pixelTolerance: [{ type: Input }],
        style: [{ type: Input }],
        features: [{ type: Input }],
        wrapX: [{ type: Input }],
        source: [{ type: Input }],
        onModifyEnd: [{ type: Output }],
        onModifyStart: [{ type: Output }],
        onChange: [{ type: Output }],
        onChangeActive: [{ type: Output }],
        onPropertyChange: [{ type: Output }]
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
        this.onChange = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
        this.onTranslateEnd = new EventEmitter();
        this.onTranslateStart = new EventEmitter();
        this.onTranslating = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TranslateInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Translate(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('translateend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onTranslateEnd.emit(event); }));
        this.instance.on('translatestart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onTranslateStart.emit(event); }));
        this.instance.on('translating', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onTranslating.emit(event); }));
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
        { type: Component, args: [{
                    selector: 'aol-interaction-translate',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    TranslateInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    TranslateInteractionComponent.propDecorators = {
        features: [{ type: Input }],
        layers: [{ type: Input }],
        hitTolerance: [{ type: Input }],
        onChange: [{ type: Output }],
        onPropertyChange: [{ type: Output }],
        onTranslateEnd: [{ type: Output }],
        onTranslateStart: [{ type: Output }],
        onTranslating: [{ type: Output }]
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
        this.instance = new Attribution(this);
    };
    AttributionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-attribution',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    AttributionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AttributionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributionsComponent = /** @class */ (function () {
    function AttributionsComponent(source) {
        this.source = source;
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
            this.instance = this.attributions.map((/**
             * @param {?} cmp
             * @return {?}
             */
            function (cmp) { return cmp.instance; }));
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
    AttributionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-attributions',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    AttributionsComponent.ctorParameters = function () { return [
        { type: SourceComponent, decorators: [{ type: Host }] }
    ]; };
    AttributionsComponent.propDecorators = {
        attributions: [{ type: ContentChildren, args: [AttributionComponent,] }]
    };
    return AttributionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceUTFGridComponent = /** @class */ (function (_super) {
    __extends(SourceUTFGridComponent, _super);
    function SourceUTFGridComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceUTFGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    };
    SourceUTFGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-utfgrid',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceUTFGridComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceUTFGridComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceUTFGridComponent.propDecorators = {
        tileJSON: [{ type: Input }],
        url: [{ type: Input }]
    };
    return SourceUTFGridComponent;
}(SourceComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceMapboxVectorTileComponent = /** @class */ (function (_super) {
    __extends(SourceMapboxVectorTileComponent, _super);
    function SourceMapboxVectorTileComponent(layer, map, http) {
        var _this = _super.call(this, layer) || this;
        _this.map = map;
        _this.http = http;
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
        this.http.get(this.styleUrl).subscribe((/**
         * @param {?} styleObject
         * @return {?}
         */
        function (styleObject) {
            _this.glStyle = styleObject;
            _this.styleLoaded = true;
            _this.applyMapboxStyle();
        }));
        this.http.get(this.spriteJsonUrl).subscribe((/**
         * @param {?} spriteData
         * @return {?}
         */
        function (spriteData) {
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
            applyBackground(this.map.instance, this.glStyle);
        }
    };
    SourceMapboxVectorTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-mapbox',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceMapboxVectorTileComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceMapboxVectorTileComponent.ctorParameters = function () { return [
        { type: LayerVectorTileComponent, decorators: [{ type: Host }] },
        { type: MapComponent },
        { type: HttpClient }
    ]; };
    SourceMapboxVectorTileComponent.propDecorators = {
        styleUrl: [{ type: Input }],
        sourceName: [{ type: Input }],
        spriteJsonUrl: [{ type: Input }],
        spriteUrl: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: COMPONENTS,
                    imports: [CommonModule, HttpClientModule],
                    exports: COMPONENTS,
                },] },
    ];
    return AngularOpenlayersModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MapComponent, ViewComponent, GraticuleComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, SourceOsmComponent, SourceBingmapsComponent, SourceClusterComponent, SourceUTFGridComponent, SourceVectorComponent, SourceXYZComponent, SourceVectorTileComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceTileJSONComponent, SourceGeoJSONComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceRasterComponent, SourceImageArcGISRestComponent, FeatureComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GeometryCircleComponent, CoordinateComponent, CollectionCoordinatesComponent, StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, DefaultControlComponent, ControlComponent, ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, FormatMVTComponent, TileGridComponent, TileGridWMTSComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent, PinchZoomInteractionComponent, DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent, OverlayComponent, ContentComponent, AttributionsComponent, AttributionComponent, SourceMapboxVectorTileComponent, AngularOpenlayersModule, FormatComponent as ɵc, SimpleGeometryComponent as ɵd, LayerComponent as ɵa, SourceComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9wZW5sYXllcnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9tYXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9ncmF0aWN1bGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcmdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9zb3VyY2UuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9yYXN0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy94eXouY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9vc20uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdGlsZWdyaWR3bXRzLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvdGlsZXdtcy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3RpbGVqc29uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvZ2VvanNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL2ltYWdlc3RhdGljLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvaW1hZ2V3bXMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9pbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZmVhdHVyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ2VvbS9nZW9tZXRyeWxpbmVzdHJpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2dlb20vZ2VvbWV0cnlwb2ludC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL292ZXJsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29vcmRpbmF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb2xsZWN0aW9uY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3N0cm9rZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zdHlsZXMvZmlsbC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL3JvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9zY2FsZWxpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvem9vbS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9kcmFnYW5kZHJvcC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ2JveC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3Bhbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZWFuZHpvb20uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9tb3VzZXdoZWVsem9vbS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvcGluY2h6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9kcmF3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvaW50ZXJhY3Rpb25zL21vZGlmeS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvdHJhbnNsYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2F0dHJpYnV0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3V0ZmdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9zb3VyY2UtbWFwYm94LXZlY3Rvci10aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcclxuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xyXG5pbXBvcnQgTWFwRXZlbnQgZnJvbSAnb2wvTWFwRXZlbnQnO1xyXG5pbXBvcnQgT2JqZWN0RXZlbnQgZnJvbSAnb2wvT2JqZWN0JztcclxuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IE1hcDtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHdpZHRoID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0ID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogRWxlbWVudCB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbk1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb3N0Q29tcG9zZTogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25QcmVDb21wb3NlOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25TaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcblxyXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xyXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcclxuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25EYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xyXG4gICAgdGhpcy5vbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25Qb3N0Q29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9zdFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJlQ29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWFwKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRUYXJnZXQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25EYmxDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vbk1vdmVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vblBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25Qb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25Qb3N0Q29tcG9zZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vblBvc3RSZW5kZXIuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25QcmVDb21wb3NlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25TaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC12aWV3JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBWaWV3O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3ZpZXcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnN0cmFpblJvdGF0aW9uOiBib29sZWFuIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZW5hYmxlUm90YXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6b29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6b29tRmFjdG9yOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjZW50ZXI6IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB6b29tQW5pbWF0aW9uID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5WaWV3IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnpvb20nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlWm9vbS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub25DaGFuZ2VSZXNvbHV0aW9uLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlQ2VudGVyLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICBjYXNlICd6b29tJzpcclxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21BbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFuaW1hdGUoeyB6b29tOiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Wm9vbShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3Byb2plY3Rpb24nOlxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtdmlldywgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXZpZXcnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyYXRpY3VsZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ3JhdGljdWxlJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JhdGljdWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dyYXRpY3VsZSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3Ryb2tlU3R5bGU6IFN0cm9rZTtcclxuICBASW5wdXQoKVxyXG4gIHNob3dMYWJlbHM6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBsb25MYWJlbFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBsYXRMYWJlbFBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JhdGljdWxlKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcmF0aWN1bGUoe1xyXG4gICAgICBzdHJva2VTdHlsZTogdGhpcy5zdHJva2VTdHlsZSxcclxuICAgICAgc2hvd0xhYmVsczogdGhpcy5zaG93TGFiZWxzLFxyXG4gICAgICBsb25MYWJlbFBvc2l0aW9uOiB0aGlzLmxvbkxhYmVsUG9zaXRpb24sXHJcbiAgICAgIGxhdExhYmVsUG9zaXRpb246IHRoaXMubGF0TGFiZWxQb3NpdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJ29sL2V2ZW50cyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IGFueTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdsYXllcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJlY29tcG9zZTogKGV2dDogRXZlbnQpID0+IHZvaWQ7XHJcbiAgQElucHV0KClcclxuICBwb3N0Y29tcG9zZTogKGV2dDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnByZWNvbXBvc2UgIT09IG51bGwgJiYgdGhpcy5wcmVjb21wb3NlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIHRoaXMucHJlY29tcG9zZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb3N0Y29tcG9zZSAhPT0gbnVsbCAmJiB0aGlzLnBvc3Rjb21wb3NlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCB0aGlzLnBvc3Rjb21wb3NlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5wdXNoKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucmVtb3ZlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBpZiAoa2V5ID09PSAncHJlY29tcG9zZScpIHtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3ByZWNvbXBvc2UnLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVjb21wb3NlJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPT09ICdwb3N0Y29tcG9zZScpIHtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3Bvc3Rjb21wb3NlJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1sYXllciwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllckdyb3VwQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgb2wubGF5ZXIuR3JvdXAgaW5zdGFuY2Ugd2l0aDpgLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JvdXAodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItaW1hZ2UnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVySW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgc291cmNlOiBJbWFnZTtcclxuXHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZSh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci10aWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllclRpbGVDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBzb3VyY2U6IFRpbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJlbG9hZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXNlSW50ZXJpbVRpbGVzT25FcnJvcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZSh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci12ZWN0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgc291cmNlOiBWZWN0b3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlZlY3RvciBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtWZWN0b3JUaWxlfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7UmVuZGVyVHlwZX0gZnJvbSAnb2wvbGF5ZXIvVmVjdG9yVGlsZSc7XHJcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSAnb2wnO1xyXG5pbXBvcnQge1N0eWxlfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllckNvbXBvbmVudH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVyR3JvdXBDb21wb25lbnR9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlRnVuY3Rpb259IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcnRpbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICByZW5kZXJNb2RlOiBSZW5kZXJUeXBlIHwgc3RyaW5nO1xyXG4gIC8qIG5vdCBtYXJrZWQgYXMgb3B0aW9uYWwgaW4gdGhlIHR5cGluZ3MgKi9cclxuICBASW5wdXQoKVxyXG4gIHJlbmRlck9yZGVyOiAoZmVhdHVyZTE6IEZlYXR1cmUsIGZlYXR1cmUyOiBGZWF0dXJlKSA9PiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzdHlsZTogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBkZWNsdXR0ZXI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTb3VyY2U7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc291cmNlJztcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IExheWVyQ29tcG9uZW50LCBwcm90ZWN0ZWQgcmFzdGVyPzogU291cmNlUmFzdGVyQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5ob3N0Lmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFzdGVyKSB7XHJcbiAgICAgIHRoaXMucmFzdGVyLnNvdXJjZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXIoczogU291cmNlKSB7XHJcbiAgICBpZiAodGhpcy5ob3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2Uocyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFzdGVyKSB7XHJcbiAgICAgIHRoaXMucmFzdGVyLnNvdXJjZXMgPSBbc107XHJcbiAgICAgIHRoaXMucmFzdGVyLmluaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY3JlYXRlWFlaIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogVGlsZUdyaWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICBtYXhab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5ab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcclxuICBASW5wdXQoKVxyXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICByZXNvbHV0aW9uczogbnVtYmVyW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYXN0ZXIsIFNvdXJjZSB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFJhc3Rlck9wZXJhdGlvblR5cGUsIFJhc3RlclNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1Jhc3Rlcic7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1yYXN0ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VSYXN0ZXJDb21wb25lbnQpLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlUmFzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW5zdGFuY2U6IFJhc3RlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBvcGVyYXRpb24/OiBPcGVyYXRpb247XHJcbiAgQElucHV0KClcclxuICB0aHJlYWRzPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGliPzogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgb3BlcmF0aW9uVHlwZT86IFJhc3Rlck9wZXJhdGlvblR5cGU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGJlZm9yZU9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFmdGVyT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIHNvdXJjZXM6IFNvdXJjZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmFzdGVyKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmVmb3Jlb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYmVmb3JlT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdhZnRlcm9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmFmdGVyT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFhZWiB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcclxuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uLCBVcmxGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXh5eicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VYWVpDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlWFlaQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogWFlaO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3BhcXVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XHJcbiAgQElucHV0KClcclxuICB0aWxlVXJsRnVuY3Rpb24/OiBVcmxGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudClcclxuICB0aWxlR3JpZFhZWjogVGlsZUdyaWRDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkU3RhcnQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEhvc3QoKVxyXG4gICAgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICByYXN0ZXI/OiBTb3VyY2VSYXN0ZXJDb21wb25lbnRcclxuICApIHtcclxuICAgIHN1cGVyKGxheWVyLCByYXN0ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcclxuICAgICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRYWVouaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFhZWih0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBmb3J3YXJkUmVmLCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9TTSB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlWFlaQ29tcG9uZW50IH0gZnJvbSAnLi94eXouY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlUmFzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xyXG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2Utb3NtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2Utb3NtXCI+PC9kaXY+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlT3NtQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZU9zbUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVhZWkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGluc3RhbmNlOiBPU007XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBtYXhab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBvcGFxdWU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBIb3N0KClcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gICAgQEhvc3QoKVxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIHJhc3Rlcj86IFNvdXJjZVJhc3RlckNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5ZXIsIHJhc3Rlcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy50aWxlR3JpZFhZWikge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE9TTSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmluZ01hcHMgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWJpbmdtYXBzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2UtYmluZ21hcHNcIj48L2Rpdj5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IEJpbmdNYXBzO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGlkcGk6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBjdWx0dXJlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBrZXk6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGltYWdlcnlTZXQ6ICdSb2FkJyB8ICdBZXJpYWwnIHwgJ0FlcmlhbFdpdGhMYWJlbHMnIHwgJ2NvbGxpbnNCYXJ0JyB8ICdvcmRuYW5jZVN1cnZleScgPSAnQWVyaWFsJztcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQmluZ01hcHModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFZlY3RvcjtcclxuICBASW5wdXQoKVxyXG4gIG92ZXJsYXBzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXNlU3BhdGlhbEluZGV4OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdDogRmVhdHVyZTtcclxuICBASW5wdXQoKVxyXG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsdXN0ZXIsIFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtY2x1c3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VDbHVzdGVyQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUNsdXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbnN0YW5jZTogQ2x1c3RlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXN0YW5jZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IChmZWF0dXJlOiBGZWF0dXJlKSA9PiBQb2ludDtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChTb3VyY2VWZWN0b3JDb21wb25lbnQpXHJcbiAgc291cmNlVmVjdG9yQ29tcG9uZW50OiBTb3VyY2VWZWN0b3JDb21wb25lbnQ7XHJcbiAgc291cmNlOiBWZWN0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuc291cmNlVmVjdG9yQ29tcG9uZW50Lmluc3RhbmNlO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2x1c3Rlcih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTJztcclxuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtdGlsZWdyaWQtd210cycsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlsZUdyaWRXTVRTQ29tcG9uZW50IGV4dGVuZHMgVGlsZUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBXTVRTO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICBvcmlnaW5zPzogQ29vcmRpbmF0ZVtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF0cml4SWRzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHNpemVzPzogU2l6ZVtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVNpemVzPzogKG51bWJlciB8IFNpemUpW107XHJcbiAgQElucHV0KClcclxuICB3aWR0aHM/OiBudW1iZXJbXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZFdNVFNDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZHdtdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV01UUyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFdNVFMgYXMgVGlsZUdyaWRXTVRTIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgeyBXTVRTUmVxdWVzdEVuY29kaW5nIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtdHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNVFNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNVFNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBXTVRTO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aWxlR3JpZDogVGlsZUdyaWRXTVRTO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZD86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlcXVlc3RFbmNvZGluZz86IFdNVFNSZXF1ZXN0RW5jb2RpbmcgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVDbGFzcz86IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVyc2lvbj86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdD86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hdHJpeFNldDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGltZW5zaW9ucz86IE9iamVjdDtcclxuICBASW5wdXQoKVxyXG4gIHVybD86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmxzPzogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRXTVRTQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkV01UUzogVGlsZUdyaWRXTVRTQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICBjYXNlICd1cmwnOlxyXG4gICAgICAgICAgICB0aGlzLnVybCA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHNldExheWVyU291cmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRpbGVHcmlkV01UUykge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFdNVFMuaW5zdGFuY2U7XHJcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdENvbXBvbmVudCB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBGZWF0dXJlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2Zvcm1hdCc7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEhvc3QsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgVmVjdG9yVGlsZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yVGlsZSc7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcclxuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcclxuaW1wb3J0IHtMYXllclZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb3JtYXRDb21wb25lbnR9IGZyb20gJy4uL2Zvcm1hdHMvZm9ybWF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGlsZUdyaWRDb21wb25lbnR9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlQ29tcG9uZW50fSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Byb2plY3Rpb25MaWtlfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHtVcmxGdW5jdGlvbn0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9ydGlsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQpfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBWZWN0b3JUaWxlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBvdmVybGFwczogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVVcmxGdW5jdGlvbjogVXJsRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHVybHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRm9ybWF0Q29tcG9uZW50KVxyXG4gIGZvcm1hdENvbXBvbmVudDogRm9ybWF0Q29tcG9uZW50O1xyXG4gIGZvcm1hdDogRmVhdHVyZTtcclxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkQ29tcG9uZW50OiBUaWxlR3JpZENvbXBvbmVudDtcclxuICB0aWxlR3JpZDogVGlsZUdyaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgLyogbmVlZCB0aGUgY2hpbGRyZW4gdG8gY29uc3RydWN0IHRoZSBPTDMgb2JqZWN0ICovXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0Q29tcG9uZW50ICE9PSBudWxsICYmIHRoaXMuZm9ybWF0Q29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmZvcm1hdENvbXBvbmVudC5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGVHcmlkQ29tcG9uZW50ICE9PSBudWxsICYmIHRoaXMudGlsZUdyaWRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZENvbXBvbmVudC5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zb3VyY2UuVmVjdG9yVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlV01TIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgVGlsZUdyaWQgfSBmcm9tICdvbC90aWxlZ3JpZCc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXRpbGV3bXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBUaWxlV01TO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBoaWRwaTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHBhcmFtczogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNlcnZlclR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZVdNUyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaWxlSlNPTiB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxlanNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlSlNPTkNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlSlNPTkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFRpbGVKU09OO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlSlNPTih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBHZW9KU09OIH0gZnJvbSAnb2wvZm9ybWF0JztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1nZW9qc29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUdlb0pTT05Db21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlR2VvSlNPTkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFZlY3RvcjtcclxuICBmb3JtYXQ6IEZlYXR1cmU7XHJcbiAgQElucHV0KClcclxuICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mb3JtYXQgPSBuZXcgR2VvSlNPTih0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRpYyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlc3RhdGljJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogSW1hZ2VTdGF0aWM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZUV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBpbWFnZVNpemU/OiBTaXplO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZVN0YXRpYyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZXdtcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZVdNU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZVdNU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBpbnN0YW5jZTogSW1hZ2VXTVM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGlkcGk6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzZXJ2ZXJUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHBhcmFtczogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICByYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbnM6IEFycmF5PG51bWJlcj47XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VXTVModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2Fkc3RhcnQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlQXJjR0lTUmVzdCB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlYXJjZ2lzcmVzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBJbWFnZUFyY0dJU1Jlc3Q7XHJcblxyXG4gIEBJbnB1dCgpIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlW107XHJcbiAgQElucHV0KCkgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KCkgcGFyYW1zPzogeyBbazogc3RyaW5nXTogYW55IH07XHJcbiAgQElucHV0KCkgcmF0aW8gPSAxLjU7XHJcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM/OiBudW1iZXJbXTtcclxuICBASW5wdXQoKSB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZUFyY0dJU1Jlc3QodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy92ZWN0b3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWZlYXR1cmUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdmZWF0dXJlJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IEZlYXR1cmU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGZWF0dXJlKCk7XHJcbiAgICBpZiAodGhpcy5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuYWRkRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnJlbW92ZUZlYXR1cmUodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlR2VvbWV0cnk7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc2ltcGxlLWdlb21ldHJ5JztcclxuXHJcbiAgQElucHV0KCkgc3JpZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWFwOiBNYXBDb21wb25lbnQsIHByb3RlY3RlZCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRHZW9tZXRyeSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LWNpcmNsZSc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0UmFkaXVzKCk7XHJcbiAgfVxyXG4gIHNldCByYWRpdXMocmFkaXVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICAgIC8vIGRlZmF1bHRpbmcgY29vcmRpbmF0ZXMgdG8gWzAsMF0uIFRvIGJlIG92ZXJyaWRkZW4gaW4gY2hpbGQgY29tcG9uZW50LlxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUoWzAsIDBdKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaW5lU3RyaW5nIH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1saW5lc3RyaW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbGluZXN0cmluZyc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBMaW5lU3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBMaW5lU3RyaW5nKFtbMCwgMF0sIFsxLCAxXV0pO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aUxpbmVTdHJpbmcgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpbGluZXN0cmluZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpTGluZVN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlMaW5lU3RyaW5nKFtbWzAsIDBdLCBbMSwgMV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpcG9pbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvaW50JztcclxuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpUG9pbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9pbnQoW1swLCAwXSwgWzEsIDFdXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpUG9seWdvbiB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbXVsdGlwb2x5Z29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlQb2x5Z29uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNdWx0aVBvbHlnb24oW1tbWzAsIDBdLCBbMSwgMV0sIFswLCAxXV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1wb2ludCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlQb2ludENvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1wb2ludCc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9pbnQoWzAsIDBdKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktcG9seWdvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LXBvbHlnb24nO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogUG9seWdvbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9seWdvbihbW1swLCAwXSwgWzEsIDFdLCBbMCwgMV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXksIFBhbk9wdGlvbnMgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IE92ZXJsYXlQb3NpdGlvbmluZyBmcm9tICdvbC9PdmVybGF5UG9zaXRpb25pbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtb3ZlcmxheScsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29tcG9uZW50VHlwZSA9ICdvdmVybGF5JztcclxuICBpbnN0YW5jZTogT3ZlcmxheTtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudClcclxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXQ6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgcG9zaXRpb25pbmc6IE92ZXJsYXlQb3NpdGlvbmluZyB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHN0b3BFdmVudDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGluc2VydEZpcnN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b1BhbjogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9QYW5BbmltYXRpb246IFBhbk9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICBhdXRvUGFuTWFyZ2luOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJsYXkodGhpcyk7XHJcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZE92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZU92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29vcmRpbmF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtY29vcmRpbmF0ZVwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogYW55O1xyXG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHg6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHk6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNyaWQgPSAnRVBTRzozODU3JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgdmlld0hvc3Q6IFZpZXdDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvaW50SG9zdDogR2VvbWV0cnlQb2ludENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5Q2lyY2xlSG9zdDogR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBvdmVybGF5SG9zdDogT3ZlcmxheUNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvb3JkaW5hdGUnKTtcclxuICAgIGlmIChnZW9tZXRyeVBvaW50SG9zdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeVBvaW50SG9zdDtcclxuICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlDaXJjbGVIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5Q2lyY2xlSG9zdDtcclxuICAgIH0gZWxzZSBpZiAodmlld0hvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gdmlld0hvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKG92ZXJsYXlIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IG92ZXJsYXlIb3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCBlID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZVxyXG4gICAgICAuZ2V0VmlldygpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xyXG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgIC5nZXQoZXZlbnQua2V5KVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGlmICh0aGlzLnNyaWQgPT09IHRoaXMubWFwU3JpZCkge1xyXG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gW3RoaXMueCwgdGhpcy55XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0cmFuc2Zvcm0oW3RoaXMueCwgdGhpcy55XSwgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgY2FzZSAnZ2VvbWV0cnktcG9pbnQnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZ2VvbWV0cnktY2lyY2xlJzpcclxuICAgICAgY2FzZSAndmlldyc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENlbnRlcih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnb3ZlcmxheSc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFBvc2l0aW9uKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXNcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkNvb3JkaW5hdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogYW55O1xyXG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XHJcbiAgQElucHV0KClcclxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TGluZXN0cmluZzogR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2x5Z29uOiBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9pbnQ6IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nOiBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2x5Z29uOiBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgaWYgKCEhZ2VvbWV0cnlMaW5lc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TGluZXN0cmluZztcclxuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeVBvbHlnb24pIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2x5Z29uO1xyXG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlwb2ludCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmcpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvbHlnb24pIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvbHlnb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzIG11c3QgYmUgYSBjaGlsZCBvZiBhIGdlb21ldHJ5IGNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCBlID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZVxyXG4gICAgICAuZ2V0VmlldygpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xyXG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgIC5nZXQoZXZlbnQua2V5KVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcclxuXHJcbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcclxuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbGluZXN0cmluZyc6XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2ludCc6XHJcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKDxDb29yZGluYXRlW10+dGhpcy5jb29yZGluYXRlcykubWFwKGMgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1wb2x5Z29uJzpcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnOlxyXG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICg8Q29vcmRpbmF0ZVtdW10+dGhpcy5jb29yZGluYXRlcykubWFwKGNjID0+XHJcbiAgICAgICAgICAgIGNjLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2x5Z29uJzpcclxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAoPENvb3JkaW5hdGVbXVtdW10+dGhpcy5jb29yZGluYXRlcykubWFwKGNjYyA9PlxyXG4gICAgICAgICAgICBjY2MubWFwKGNjID0+IGNjLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGwsIEltYWdlLCBTdHJva2UsIFN0eWxlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQgfCBMYXllclZlY3RvckNvbXBvbmVudDtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFN0eWxlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlJztcclxuXHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmlsbDogRmlsbDtcclxuICBASW5wdXQoKVxyXG4gIGltYWdlOiBJbWFnZTtcclxuICBASW5wdXQoKVxyXG4gIHN0cm9rZTogU3Ryb2tlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dDogVGV4dDtcclxuICBASW5wdXQoKVxyXG4gIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmZWF0dXJlSG9zdDogRmVhdHVyZUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgbGF5ZXJIb3N0OiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZScpO1xyXG4gICAgdGhpcy5ob3N0ID0gISFmZWF0dXJlSG9zdCA/IGZlYXR1cmVIb3N0IDogbGF5ZXJIb3N0O1xyXG4gICAgaWYgKCF0aGlzLmhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUgbXVzdCBiZSBhcHBsaWVkIHRvIGEgZmVhdHVyZSBvciBhIGxheWVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgc3R5bGVcXCdzIGhvc3Q6ICcsIHRoaXMuaG9zdCk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuY2hhbmdlZCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHlsZSh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHlsZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXRsYXNNYW5hZ2VyLCBDaXJjbGUsIEZpbGwsIFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLWNpcmNsZSc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmlsbDogRmlsbDtcclxuICBASW5wdXQoKVxyXG4gIHJhZGl1czogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzdHJva2U6IFN0cm9rZTtcclxuICBASW5wdXQoKVxyXG4gIGF0bGFzTWFuYWdlcjogQXRsYXNNYW5hZ2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdPUkstQVJPVU5EOiBzaW5jZSB0aGUgcmUtcmVuZGVyaW5nIGlzIG5vdCB0cmlnZ2VyZWQgb24gc3R5bGUgY2hhbmdlXHJcbiAgICogd2UgdHJpZ2dlciBhIHJhZGl1cyBjaGFuZ2UuXHJcbiAgICogc2VlIG9wZW5sYXllcnMgIzYyMzMgYW5kICM1Nzc1XHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCEhdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2VcXCdzIHJhZGl1cycpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyh0aGlzLnJhZGl1cyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3JhZGl1cyddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtY2lyY2xlLCBzZXR0aW5nIG5ldyByYWRpdXM6ICcsIGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtc3R5bGUtY2lyY2xlJyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UobnVsbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLXRleHQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXRleHRcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogVGV4dDtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS10ZXh0JztcclxuXHJcbiAgQElucHV0KClcclxuICBmb250OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRYOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRZOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBzY2FsZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICByb3RhdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dEFsaWduOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB0ZXh0QmFzZUxpbmU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge1xyXG4gICAgaWYgKCFob3N0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXRleHQgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLXRleHQgd2l0aDogJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5UZXh0IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUZXh0KHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFRleHQodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2ZvbnQnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldEZvbnQoY2hhbmdlc1snZm9udCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snb2Zmc2V0WCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T2Zmc2V0WChjaGFuZ2VzWydvZmZzZXRYJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydvZmZzZXRZJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRZKGNoYW5nZXNbJ29mZnNldFknXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NjYWxlJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzWydzY2FsZSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sncm90YXRpb24nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXNbJ3JvdGF0aW9uJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd0ZXh0J10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0KGNoYW5nZXNbJ3RleHQnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3RleHRBbGlnbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dEFsaWduKGNoYW5nZXNbJ3RleHRBbGlnbiddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sndGV4dEJhc2VMaW5lJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QmFzZWxpbmUoY2hhbmdlc1sndGV4dEJhc2VMaW5lJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS10ZXh0LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnb2wvY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtc3Ryb2tlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1zdHJva2VcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVTdHJva2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTdHJva2U7XHJcbiAgLyogdGhlIHR5cGluZ3MgZG8gbm90IGhhdmUgdGhlIHNldHRlcnMgKi9cclxuICBwcml2YXRlIGhvc3Q6IC8qU3R5bGVDb21wb25lbnR8U3R5bGVDaXJjbGVDb21wb25lbnR8U3R5bGVUZXh0Q29tcG9uZW50Ki8gYW55O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBDb2xvciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIGxpbmVDYXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIGxpbmVEYXNoOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIGxpbmVKb2luOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBtaXRlckxpbWl0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlSG9zdDogU3R5bGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVUZXh0SG9zdDogU3R5bGVUZXh0Q29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBpZiAoIXN0eWxlSG9zdCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZS1zdHJva2UgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoISFzdHlsZVRleHRIb3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlVGV4dEhvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKCEhc3R5bGVDaXJjbGVIb3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlQ2lyY2xlSG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlSG9zdDtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtc3Ryb2tlIHdpdGg6ICcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuU3Ryb2tlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHJva2UodGhpcyk7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N0eWxlJzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3Ryb2tlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlIGluc3RhbmNlXFwncyBzdHJva2U6JywgdGhpcy5ob3N0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3R5bGUtdGV4dCc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0cm9rZSh0aGlzLmluc3RhbmNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3R5bGUtY2lyY2xlJzpcclxuICAgICAgICB0aGlzLmhvc3Quc3Ryb2tlID0gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5jaXJjbGUgaW5zdGFuY2VcXCdzIHN0cm9rZTonLCB0aGlzLmhvc3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBob3N0IHR5cGU6ICcgKyB0aGlzLmhvc3QpO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snY29sb3InXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldENvbG9yKGNoYW5nZXNbJ2NvbG9yJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydsaW5lQ2FwJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRMaW5lQ2FwKGNoYW5nZXNbJ2xpbmVDYXAnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2xpbmVEYXNoJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRMaW5lRGFzaChjaGFuZ2VzWydsaW5lRGFzaCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snbGluZUpvaW4nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVKb2luKGNoYW5nZXNbJ2xpbmVKb2luJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydtaXRlckxpbWl0J10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRNaXRlckxpbWl0KGNoYW5nZXNbJ21pdGVyTGltaXQnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3dpZHRoJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRXaWR0aChjaGFuZ2VzWyd3aWR0aCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtc3Ryb2tlLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xyXG5pbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1pY29uXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IEljb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yWFVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XHJcbiAgQElucHV0KClcclxuICBhbmNob3JZVW5pdHM6IEljb25BbmNob3JVbml0cztcclxuICBASW5wdXQoKVxyXG4gIGFuY2hvck9yaWdpbjogSWNvbk9yaWdpbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBJY29uT3JpZ2luO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRPcmlnaW46IEljb25PcmlnaW47XHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzY2FsZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nU2l6ZTogW251bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIHNyYzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ29wYWNpdHknXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9wYWNpdHkoY2hhbmdlc1snb3BhY2l0eSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sncm90YXRpb24nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXNbJ3JvdGF0aW9uJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydzY2FsZSddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlc1snc2NhbGUnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcclxuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWljb246ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsbCB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnb2wvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckxpa2UgfSBmcm9tICdvbC9jb2xvcmxpa2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtZmlsbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtZmlsbFwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZUZpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgLyogdGhlIHR5cGluZ3MgZG8gbm90IGhhdmUgdGhlIHNldHRlcnMgKi9cclxuICBwcml2YXRlIGhvc3Q6IC8qU3R5bGVDb21wb25lbnR8U3R5bGVDaXJjbGVDb21wb25lbnR8U3R5bGVUZXh0Q29tcG9uZW50Ki8gYW55O1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogRmlsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvcjogQ29sb3IgfCBDb2xvckxpa2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVIb3N0OiBTdHlsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlQ2lyY2xlSG9zdDogU3R5bGVDaXJjbGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZVRleHRIb3N0OiBTdHlsZVRleHRDb21wb25lbnRcclxuICApIHtcclxuICAgIGlmICghc3R5bGVIb3N0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXN0cm9rZSBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcclxuICAgIH1cclxuICAgIGlmICghIXN0eWxlVGV4dEhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVUZXh0SG9zdDtcclxuICAgIH0gZWxzZSBpZiAoISFzdHlsZUNpcmNsZUhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVDaXJjbGVIb3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVIb3N0O1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZS1maWxsIHdpdGg6ICcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuRmlsbCBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRmlsbCh0aGlzKTtcclxuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRGaWxsKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlIGluc3RhbmNlXFwncyBmaWxsOicsIHRoaXMuaG9zdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0eWxlLXRleHQnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRGaWxsKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdHlsZS1jaXJjbGUnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5maWxsID0gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5jaXJjbGUgaW5zdGFuY2VcXCdzIGZpbGw6JywgdGhpcy5ob3N0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaG9zdCB0eXBlOiAnICsgdGhpcy5ob3N0KTtcclxuICAgICAgLy8gYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2NvbG9yJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRDb2xvcihjaGFuZ2VzWydjb2xvciddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtZmlsbCwgc2V0dGluZyBuZXcgY29sb3I6ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBPcHRpb25zIGFzIEF0dHJpYnV0aW9uT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xyXG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XHJcbmltcG9ydCB7IE9wdGlvbnMgYXMgWm9vbU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1pvb20nO1xyXG5cclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxDb250cm9sPjtcclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25PcHRpb25zOiBBdHRyaWJ1dGlvbk9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICByb3RhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21PcHRpb25zOiBab29tT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5kZWZhdWx0cyBpbml0OiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2woYykpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZGVmYXVsdHMnKTtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2woYykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XHJcbiAgaW5zdGFuY2U6IENvbnRyb2w7XHJcbiAgZWxlbWVudDogRWxlbWVudDtcclxuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQpXHJcbiAgY29udGVudDogQ29udGVudENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ29udHJvbCh0aGlzKTtcclxuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWF0dHJpYnV0aW9uJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XHJcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xyXG4gIHRhcmdldDogRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLkF0dHJpYnV0aW9uIGluaXQ6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdHRyaWJ1dGlvbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1hdHRyaWJ1dGlvbicpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IEZ1bGxTY3JlZW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWxBY3RpdmU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBrZXlzOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1mdWxsc2NyZWVuJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRnVsbFNjcmVlbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1mdWxsc2NyZWVuJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgTW91c2VQb3NpdGlvbiBmcm9tICdvbC9jb250cm9sL01vdXNlUG9zaXRpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZUZvcm1hdCB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogTW91c2VQb3NpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGNvb3JkaW5hdGVGb3JtYXQ6IENvb3JkaW5hdGVGb3JtYXQ7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICB0YXJnZXQ6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuTW91c2VQb3NpdGlvbiBpbml0OiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW91c2VQb3NpdGlvbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBPdmVydmlld01hcCB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtb3ZlcnZpZXdtYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdmVydmlld01hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBPdmVydmlld01hcDtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNlTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyczogTGF5ZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldDogRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB2aWV3OiBWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbCAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCd2aWV3JykpIHtcclxuICAgICAgdGhpcy5yZWxvYWRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWxvYWRJbnN0YW5jZSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm90YXRlIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1yb3RhdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xSb3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFJvdGF0ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9IaWRlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSb3RhdGUodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtcm90YXRlJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2FsZUxpbmUgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXNjYWxlbGluZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogU2NhbGVMaW5lO1xyXG4gIEBJbnB1dCgpXHJcbiAgdW5pdHM6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtc2NhbGVsaW5lJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2NhbGVMaW5lKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXNjYWxlbGluZScpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWm9vbSB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFpvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21JbkxhYmVsOiBzdHJpbmcgfCBOb2RlO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbU91dExhYmVsOiBzdHJpbmcgfCBOb2RlO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbUluVGlwTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHpvb21PdXRUaXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVsdGE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWm9vbVNsaWRlciB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21TbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFpvb21TbGlkZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbVNsaWRlcih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBab29tVG9FeHRlbnQgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXpvb210b2V4dGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Ub0V4dGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogWm9vbVRvRXh0ZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb21Ub0V4dGVudCh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tdG9leHRlbnQnKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTVZUIH0gZnJvbSAnb2wvZm9ybWF0JztcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tJztcclxuaW1wb3J0IEdlb21ldHJ5VHlwZSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1mb3JtYXQtbXZ0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBGb3JtYXRDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1hdE1WVENvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRNVlRDb21wb25lbnQgZXh0ZW5kcyBGb3JtYXRDb21wb25lbnQge1xyXG4gIGluc3RhbmNlOiBNVlQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZUNsYXNzOlxyXG4gICAgfCAoKGdlb206IEdlb21ldHJ5IHwgeyBbazogc3RyaW5nXTogYW55IH0pID0+IGFueSlcclxuICAgIHwgKChnZW9tOiBHZW9tZXRyeVR5cGUsIGFyZzI6IG51bWJlcltdLCBhcmczOiBudW1iZXJbXSB8IG51bWJlcltdW10sIGFyZzQ6IHsgW2s6IHN0cmluZ106IGFueSB9KSA9PiBhbnkpO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllck5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTVZUKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRzLCBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kZWZhdWx0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248SW50ZXJhY3Rpb24+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cygpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGkgPT4gdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24oaSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goaSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbihpKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvdWJsZUNsaWNrWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kb3VibGVjbGlja3pvb20nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERvdWJsZUNsaWNrWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEb3VibGVDbGlja1pvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGRlbHRhOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEb3VibGVDbGlja1pvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdBbmREcm9wIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ2FuZGRyb3AnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYWdBbmREcm9wO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdENvbnN0cnVjdG9yczogKChuOiBGZWF0dXJlKSA9PiBhbnkpW107XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldDogRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnQm94IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcbmltcG9ydCB7IEVuZENvbmRpdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYWdCb3gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ2JveCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0JveEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnQm94O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBib3hFbmRDb25kaXRpb246IEVuZENvbmRpdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdCb3godGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdQYW4gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBLaW5ldGljIGZyb20gJ29sL0tpbmV0aWMnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFncGFuJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnUGFuSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYWdQYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBraW5ldGljOiBLaW5ldGljO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1Bhbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ1JvdGF0ZSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ3JvdGF0ZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1JvdGF0ZUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnUm90YXRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdSb3RhdGUodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdSb3RhdGVBbmRab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFncm90YXRlYW5kem9vbScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1JvdGF0ZUFuZFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ1JvdGF0ZUFuZFpvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1JvdGF0ZUFuZFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnem9vbScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ1pvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb246IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBvdXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW91c2VXaGVlbFpvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tbW91c2V3aGVlbHpvb20nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE1vdXNlV2hlZWxab29tO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbWVvdXQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHVzZUFuY2hvcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vdXNlV2hlZWxab29tKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaW5jaFpvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tcGluY2h6b29tJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaW5jaFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogUGluY2hab29tO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjb25zdHJhaW5SZXNvbHV0aW9uOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUGluY2hab29tKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyYXcgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgRHJhd0V2ZW50LCBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdyc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhdycsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd0ludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmF3O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsaWNrVG9sZXJhbmNlPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc291cmNlPzogVmVjdG9yO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6IEdlb21ldHJ5VHlwZTtcclxuICBASW5wdXQoKVxyXG4gIG1heFBvaW50cz86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblBvaW50cz86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGZpbmlzaENvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBmcmVlaGFuZD86IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYXcodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25DaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd2VuZCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uRHJhd0VuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkRyYXdTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBTZWxlY3RFdmVudCwgRmlsdGVyRnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFNlbGVjdDtcclxuXHJcbiAgQElucHV0KClcclxuICBhZGRDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBsYXllcnM/OiBMYXllcltdIHwgKChsYXllcjogTGF5ZXIpID0+IGJvb2xlYW4pO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVtb3ZlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdG9nZ2xlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgbXVsdGk/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgZmlsdGVyPzogRmlsdGVyRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTZWxlY3QodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZWxlY3QnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kaWZ5IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTW9kaWZ5RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9Nb2RpZnknO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vZGlmeScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE1vZGlmeTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBkZWxldGVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzOiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc291cmNlPzogVmVjdG9yO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbk1vZGlmeUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Nb2RpZnlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vZGlmeSh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25DaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25DaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5ZW5kJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbk1vZGlmeUVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnlzdGFydCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25Nb2RpZnlTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1RyYW5zbGF0ZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tdHJhbnNsYXRlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogVHJhbnNsYXRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcclxuICBASW5wdXQoKVxyXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XHJcbiAgQElucHV0KClcclxuICBoaXRUb2xlcmFuY2U/OiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25UcmFuc2xhdGVFbmQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25UcmFuc2xhdGVTdGFydDogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0aW5nOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uVHJhbnNsYXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uVHJhbnNsYXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRyYW5zbGF0ZSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RyYW5zbGF0ZWVuZCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlc3RhcnQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRlU3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRpbmcnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRpbmcuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9uJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBBdHRyaWJ1dGlvbjtcclxuICBodG1sOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F0dHJpYnV0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbnMnLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBpbnN0YW5jZTogQXJyYXk8QXR0cmlidXRpb24+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEF0dHJpYnV0aW9uQ29tcG9uZW50KVxyXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU291cmNlQ29tcG9uZW50KSB7fVxyXG5cclxuICAvKiB3ZSBjYW4gZG8gdGhpcyBhdCB0aGUgdmVyeSBlbmQgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmF0dHJpYnV0aW9ucy5tYXAoY21wID0+IGNtcC5pbnN0YW5jZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIGF0dHJpYnV0aW9uczonLCB0aGlzLmluc3RhbmNlKTtcclxuICAgICAgdGhpcy5zb3VyY2UuaW5zdGFuY2Uuc2V0QXR0cmlidXRpb25zKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVVEZHcmlkIH0gZnJvbSAnb2wvc291cmNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS11dGZncmlkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVVURkdyaWRDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVVRGR3JpZENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFVURkdyaWQ7XHJcbiAgQElucHV0KCkgdGlsZUpTT046IEpTT047XHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVURkdyaWQodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0FmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvamVjdGlvbkxpa2V9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHtVcmxGdW5jdGlvbn0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgc3R5bGVmdW5jdGlvbiBmcm9tICdvbC1tYXBib3gtc3R5bGUvc3R5bGVmdW5jdGlvbic7XG5pbXBvcnQge2FwcGx5U3R5bGUsIGFwcGx5QmFja2dyb3VuZH0gZnJvbSAnb2wtbWFwYm94LXN0eWxlJztcbmltcG9ydCB7U291cmNlQ29tcG9uZW50fSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHtMYXllclZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7U291cmNlVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi92ZWN0b3J0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1tYXBib3gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudCl9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBzdHlsZVVybDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNvdXJjZU5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKSBzcHJpdGVKc29uVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc3ByaXRlVXJsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdHlsZUxvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3ByaXRlSnNvbkxvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZ2xTdHlsZSA9IHt9O1xuXG4gIHByaXZhdGUgc3ByaXRlRGF0YSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCwgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG5cbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc3R5bGVVcmwpLnN1YnNjcmliZShzdHlsZU9iamVjdCA9PiB7XG4gICAgICB0aGlzLmdsU3R5bGUgPSBzdHlsZU9iamVjdDtcbiAgICAgIHRoaXMuc3R5bGVMb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5hcHBseU1hcGJveFN0eWxlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc3ByaXRlSnNvblVybCkuc3Vic2NyaWJlKHNwcml0ZURhdGEgPT4ge1xuICAgICAgdGhpcy5zcHJpdGVEYXRhID0gc3ByaXRlRGF0YTtcbiAgICAgIHRoaXMuc3ByaXRlSnNvbkxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFwcGx5TWFwYm94U3R5bGUoKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgYXBwbHlNYXBib3hTdHlsZSgpIHtcbiAgICAvLyBzZXQgdGhlIG1hcGJveCBzdHlsZVxuICAgIGlmICh0aGlzLnNwcml0ZUpzb25Mb2FkZWQgJiYgdGhpcy5zdHlsZUxvYWRlZCkge1xuICAgICAgc3R5bGVmdW5jdGlvbih0aGlzLmhvc3QuaW5zdGFuY2UsIHRoaXMuZ2xTdHlsZSwgdGhpcy5zb3VyY2VOYW1lLCB1bmRlZmluZWQsIHRoaXMuc3ByaXRlRGF0YSwgdGhpcy5zcHJpdGVVcmwpO1xuICAgICAgYXBwbHlCYWNrZ3JvdW5kKHRoaXMubWFwLmluc3RhbmNlLCB0aGlzLmdsU3R5bGUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKlxyXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2Ygbmd4LW9wZW5sYXllcnNcclxuICovXHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtWaWV3Q29tcG9uZW50fSBmcm9tICcuL2xpYi92aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R3JhdGljdWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9ncmF0aWN1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllckdyb3VwQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVySW1hZ2VDb21wb25lbnR9IGZyb20gJy4vbGliL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJUaWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tICcuL2xpYi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllclZlY3RvckNvbXBvbmVudH0gZnJvbSAnLi9saWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlT3NtQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL29zbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZUJpbmdtYXBzQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL2JpbmdtYXBzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlQ2x1c3RlckNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9jbHVzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlVmVjdG9yQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVhZWkNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy94eXouY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VUaWxlV01UU0NvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy90aWxld210cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdmVjdG9ydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVRpbGVXTVNDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdGlsZXdtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVRpbGVKU09OQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3RpbGVqc29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlR2VvSlNPTkNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9nZW9qc29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvaW1hZ2VzdGF0aWMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VJbWFnZVdNU0NvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9pbWFnZXdtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9pbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VSYXN0ZXJDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmVhdHVyZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dlb21ldHJ5Q2lyY2xlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlQb2ludENvbXBvbmVudH0gZnJvbSAnLi9saWIvZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nvb3JkaW5hdGVDb21wb25lbnR9IGZyb20gJy4vbGliL2Nvb3JkaW5hdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvc3R5bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdHlsZUNpcmNsZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvc3R5bGVzL2NpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlU3Ryb2tlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvc3Ryb2tlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVJY29uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlRmlsbENvbXBvbmVudH0gZnJvbSAnLi9saWIvc3R5bGVzL2ZpbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdHlsZVRleHRDb21wb25lbnR9IGZyb20gJy4vbGliL3N0eWxlcy90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGVmYXVsdENvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL2RlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbEF0dHJpYnV0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xGdWxsU2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9mdWxsc2NyZWVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL21vdXNlcG9zaXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sT3ZlcnZpZXdNYXBDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFJvdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvcm90YXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFNjYWxlTGluZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvc2NhbGVsaW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFpvb21Db21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL3pvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvem9vbXNsaWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xab29tVG9FeHRlbnRDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1hdE1WVENvbXBvbmVudH0gZnJvbSAnLi9saWIvZm9ybWF0cy9tdnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaWxlR3JpZENvbXBvbmVudH0gZnJvbSAnLi9saWIvdGlsZWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaWxlR3JpZFdNVFNDb21wb25lbnR9IGZyb20gJy4vbGliL3RpbGVncmlkd210cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHtEb3VibGVDbGlja1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RvdWJsZWNsaWNrem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFnYW5kZHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdCb3hJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RyYWdib3guY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnUGFuSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFncGFuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ1JvdGF0ZUludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdSb3RhdGVBbmRab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFncm90YXRlYW5kem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFnem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9tb3VzZXdoZWVsem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BpbmNoWm9vbUludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvcGluY2h6b29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhd0ludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlbGVjdEludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9tb2RpZnkuY29tcG9uZW50JztcclxuaW1wb3J0IHtUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL3RyYW5zbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge092ZXJsYXlDb21wb25lbnR9IGZyb20gJy4vbGliL292ZXJsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXR0cmlidXRpb25zQ29tcG9uZW50fSBmcm9tICcuL2xpYi9hdHRyaWJ1dGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBdHRyaWJ1dGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvYXR0cmlidXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VVVEZHcmlkQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3V0ZmdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3NvdXJjZS1tYXBib3gtdmVjdG9yLXRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE1hcENvbXBvbmVudCxcclxuICBWaWV3Q29tcG9uZW50LFxyXG4gIEdyYXRpY3VsZUNvbXBvbmVudCxcclxuICBMYXllckdyb3VwQ29tcG9uZW50LFxyXG4gIExheWVySW1hZ2VDb21wb25lbnQsXHJcbiAgTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuICBTb3VyY2VPc21Db21wb25lbnQsXHJcbiAgU291cmNlQmluZ21hcHNDb21wb25lbnQsXHJcbiAgU291cmNlQ2x1c3RlckNvbXBvbmVudCxcclxuICBTb3VyY2VVVEZHcmlkQ29tcG9uZW50LFxyXG4gIFNvdXJjZVZlY3RvckNvbXBvbmVudCxcclxuICBTb3VyY2VYWVpDb21wb25lbnQsXHJcbiAgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlV01TQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVKU09OQ29tcG9uZW50LFxyXG4gIFNvdXJjZUdlb0pTT05Db21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VXTVNDb21wb25lbnQsXHJcbiAgU291cmNlUmFzdGVyQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCxcclxuICBGZWF0dXJlQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQsXHJcbiAgR2VvbWV0cnlQb2ludENvbXBvbmVudCxcclxuICBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXHJcbiAgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsXHJcbiAgQ29vcmRpbmF0ZUNvbXBvbmVudCxcclxuICBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQsXHJcbiAgU3R5bGVDb21wb25lbnQsXHJcbiAgU3R5bGVDaXJjbGVDb21wb25lbnQsXHJcbiAgU3R5bGVGaWxsQ29tcG9uZW50LFxyXG4gIFN0eWxlSWNvbkNvbXBvbmVudCxcclxuICBTdHlsZVN0cm9rZUNvbXBvbmVudCxcclxuICBTdHlsZVRleHRDb21wb25lbnQsXHJcbiAgRGVmYXVsdENvbnRyb2xDb21wb25lbnQsXHJcbiAgQ29udHJvbENvbXBvbmVudCxcclxuICBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50LFxyXG4gIENvbnRyb2xSb3RhdGVDb21wb25lbnQsXHJcbiAgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50LFxyXG4gIEZvcm1hdE1WVENvbXBvbmVudCxcclxuICBUaWxlR3JpZENvbXBvbmVudCxcclxuICBUaWxlR3JpZFdNVFNDb21wb25lbnQsXHJcbiAgRGVmYXVsdEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERvdWJsZUNsaWNrWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ0JveEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdQYW5JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnUm90YXRlSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1JvdGF0ZUFuZFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIE1vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgUGluY2hab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhd0ludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIFNlbGVjdEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIE1vZGlmeUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIFRyYW5zbGF0ZUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIE92ZXJsYXlDb21wb25lbnQsXHJcbiAgQ29udGVudENvbXBvbmVudCxcclxuICBBdHRyaWJ1dGlvbnNDb21wb25lbnQsXHJcbiAgQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudFxyXG59O1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBNYXBDb21wb25lbnQsXHJcblxyXG4gIFZpZXdDb21wb25lbnQsXHJcbiAgR3JhdGljdWxlQ29tcG9uZW50LFxyXG5cclxuICBMYXllckdyb3VwQ29tcG9uZW50LFxyXG4gIExheWVySW1hZ2VDb21wb25lbnQsXHJcbiAgTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuXHJcbiAgU291cmNlT3NtQ29tcG9uZW50LFxyXG4gIFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50LFxyXG4gIFNvdXJjZUNsdXN0ZXJDb21wb25lbnQsXHJcbiAgU291cmNlVVRGR3JpZENvbXBvbmVudCxcclxuICBTb3VyY2VWZWN0b3JDb21wb25lbnQsXHJcbiAgU291cmNlWFlaQ29tcG9uZW50LFxyXG4gIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQsXHJcbiAgU291cmNlVGlsZVdNU0NvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlSlNPTkNvbXBvbmVudCxcclxuICBTb3VyY2VHZW9KU09OQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlV01TQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCxcclxuICBTb3VyY2VSYXN0ZXJDb21wb25lbnQsXHJcbiAgRmVhdHVyZUNvbXBvbmVudCxcclxuICBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5UG9pbnRDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50LFxyXG4gIENvb3JkaW5hdGVDb21wb25lbnQsXHJcbiAgQ29sbGVjdGlvbkNvb3JkaW5hdGVzQ29tcG9uZW50LFxyXG5cclxuICBTdHlsZUNvbXBvbmVudCxcclxuICBTdHlsZUNpcmNsZUNvbXBvbmVudCxcclxuICBTdHlsZUZpbGxDb21wb25lbnQsXHJcbiAgU3R5bGVJY29uQ29tcG9uZW50LFxyXG4gIFN0eWxlU3Ryb2tlQ29tcG9uZW50LFxyXG4gIFN0eWxlVGV4dENvbXBvbmVudCxcclxuXHJcbiAgRGVmYXVsdENvbnRyb2xDb21wb25lbnQsXHJcbiAgQ29udHJvbENvbXBvbmVudCxcclxuICBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50LFxyXG4gIENvbnRyb2xSb3RhdGVDb21wb25lbnQsXHJcbiAgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50LFxyXG5cclxuICBGb3JtYXRNVlRDb21wb25lbnQsXHJcbiAgVGlsZUdyaWRDb21wb25lbnQsXHJcbiAgVGlsZUdyaWRXTVRTQ29tcG9uZW50LFxyXG5cclxuICBEZWZhdWx0SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRG91YmxlQ2xpY2tab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ0FuZERyb3BJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnQm94SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1BhbkludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdSb3RhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnUm90YXRlQW5kWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgTW91c2VXaGVlbFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBQaW5jaFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmF3SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgVHJhbnNsYXRlSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcblxyXG4gIE92ZXJsYXlDb21wb25lbnQsXHJcbiAgQ29udGVudENvbXBvbmVudCxcclxuICBBdHRyaWJ1dGlvbnNDb21wb25lbnQsXHJcbiAgQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJPcGVubGF5ZXJzTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJWZWN0b3IiLCJXTVRTIiwiVmVjdG9yVGlsZSIsIkNpcmNsZSIsImRlZmF1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQXdFRSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTVDN0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLFdBQU0sR0FBRyxNQUFNLENBQUM7O1FBb0NoQixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNw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