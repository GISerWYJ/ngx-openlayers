import { Component, ElementRef, Input, Output, EventEmitter, SkipSelf, Optional, forwardRef, Host, ContentChild, ContentChildren, NgModule } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import 'ol/extent';
import 'ol/coordinate';
import { Graticule, Feature, Overlay } from 'ol';
import { Stroke, Fill, Style, Text, Circle as Circle$1, Icon } from 'ol/style';
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
class MapComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
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
    ngOnInit() {
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onClick.emit(event)));
        this.instance.on('dblclick', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDblClick.emit(event)));
        this.instance.on('moveend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onMoveEnd.emit(event)));
        this.instance.on('pointerdrag', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPointerDrag.emit(event)));
        this.instance.on('pointermove', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPointerMove.emit(event)));
        this.instance.on('postcompose', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPostCompose.emit(event)));
        this.instance.on('postrender', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPostRender.emit(event)));
        this.instance.on('precompose', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPreCompose.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.instance.on('singleclick', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onSingleClick.emit(event)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.instance.updateSize();
    }
}
MapComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-map',
                template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
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
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeZoom.emit(event)));
        this.instance.on('change:resolution', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeResolution.emit(event)));
        this.instance.on('change:center', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeCenter.emit(event)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
}
ViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-view',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ViewComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GraticuleComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.componentType = 'graticule';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    }
}
GraticuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-graticule',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
GraticuleComponent.ctorParameters = () => [
    { type: MapComponent }
];
GraticuleComponent.propDecorators = {
    strokeStyle: [{ type: Input }],
    showLabels: [{ type: Input }],
    lonLabelPosition: [{ type: Input }],
    latLabelPosition: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class LayerComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.precompose !== null && this.precompose !== undefined) {
            this.instance.on('precompose', this.precompose);
        }
        if (this.postcompose !== null && this.postcompose !== undefined) {
            this.instance.on('postcompose', this.postcompose);
        }
        this.host.instance.getLayers().push(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.host.instance.getLayers().remove(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerGroupComponent extends LayerComponent {
    /**
     * @param {?} map
     * @param {?=} group
     */
    constructor(map, group) {
        super(group || map);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        super.ngOnInit();
    }
}
LayerGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-layer-group',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
LayerGroupComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerImageComponent extends LayerComponent {
    /**
     * @param {?} map
     * @param {?=} group
     */
    constructor(map, group) {
        super(group || map);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Image(this);
        super.ngOnInit();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-layer-image',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
LayerImageComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
LayerImageComponent.propDecorators = {
    opacity: [{ type: Input }],
    visible: [{ type: Input }],
    extent: [{ type: Input }],
    minResolution: [{ type: Input }],
    maxResolution: [{ type: Input }],
    zIndex: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerTileComponent extends LayerComponent {
    /**
     * @param {?} map
     * @param {?=} group
     */
    constructor(map, group) {
        super(group || map);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        super.ngOnInit();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-layer-tile',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
LayerTileComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
LayerTileComponent.propDecorators = {
    preload: [{ type: Input }],
    useInterimTilesOnError: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerVectorComponent extends LayerComponent {
    /**
     * @param {?} map
     * @param {?=} group
     */
    constructor(map, group) {
        super(group || map);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new Vector(this);
        super.ngOnInit();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerVectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-layer-vector',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
LayerVectorComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
LayerVectorComponent.propDecorators = {
    renderBuffer: [{ type: Input }],
    style: [{ type: Input }],
    updateWhileAnimating: [{ type: Input }],
    updateWhileInteracting: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerVectorTileComponent extends LayerComponent {
    /**
     * @param {?} map
     * @param {?=} group
     */
    constructor(map, group) {
        super(group || map);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        super.ngOnInit();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerVectorTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-layer-vectortile',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
LayerVectorTileComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceComponent {
    /**
     * @param {?} host
     * @param {?=} raster
     */
    constructor(host, raster) {
        this.host = host;
        this.raster = raster;
        this.componentType = 'source';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
        if (this.raster) {
            this.raster.sources = [];
        }
    }
    /**
     * @protected
     * @param {?} s
     * @return {?}
     */
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
        if (this.raster) {
            this.raster.sources = [s];
            this.raster.init();
        }
    }
}
SourceComponent.propDecorators = {
    attributions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TileGridComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceRasterComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.beforeOperations.emit(event)));
        this.instance.on('afteroperations', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.afterOperations.emit(event)));
        this._register(this.instance);
    }
}
SourceRasterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-raster',
                template: `
    <ng-content></ng-content>
  `,
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceRasterComponent)),
                    },
                ],
            },] },
];
/** @nocollapse */
SourceRasterComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceRasterComponent.propDecorators = {
    operation: [{ type: Input }],
    threads: [{ type: Input }],
    lib: [{ type: Input }],
    operationType: [{ type: Input }],
    beforeOperations: [{ type: Output }],
    afterOperations: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceXYZComponent extends SourceComponent {
    /**
     * @param {?} layer
     * @param {?=} raster
     */
    constructor(layer, raster) {
        super(layer, raster);
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    }
    /**
     * @return {?}
     */
    init() {
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.tileLoadStart.emit(event)));
        this.instance.on('tileloadend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.tileLoadEnd.emit(event)));
        this.instance.on('tileloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.tileLoadError.emit(event)));
        this._register(this.instance);
    }
}
SourceXYZComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-xyz',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceXYZComponent)) }],
            },] },
];
/** @nocollapse */
SourceXYZComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: SourceRasterComponent, decorators: [{ type: Optional }, { type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceOsmComponent extends SourceXYZComponent {
    /**
     * @param {?} layer
     * @param {?=} raster
     */
    constructor(layer, raster) {
        super(layer, raster);
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.tileLoadStart.emit(event)));
        this.instance.on('tileloadend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.tileLoadEnd.emit(event)));
        this.instance.on('tileloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.tileLoadError.emit(event)));
        this._register(this.instance);
    }
}
SourceOsmComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-osm',
                template: `
    <div class="aol-source-osm"></div>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceOsmComponent)) }],
            },] },
];
/** @nocollapse */
SourceOsmComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: SourceRasterComponent, decorators: [{ type: Host }, { type: Optional }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceBingmapsComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.imagerySet = 'Aerial';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceBingmapsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-bingmaps',
                template: `
    <div class="aol-source-bingmaps"></div>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceBingmapsComponent)) }],
            },] },
];
/** @nocollapse */
SourceBingmapsComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceVectorComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceVectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-vector',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceVectorComponent)) }],
            },] },
];
/** @nocollapse */
SourceVectorComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
SourceVectorComponent.propDecorators = {
    overlaps: [{ type: Input }],
    useSpatialIndex: [{ type: Input }],
    wrapX: [{ type: Input }],
    url: [{ type: Input }],
    format: [{ type: Input }],
    strategy: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceClusterComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceClusterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-cluster',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceClusterComponent)) }],
            },] },
];
/** @nocollapse */
SourceClusterComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
SourceClusterComponent.propDecorators = {
    distance: [{ type: Input }],
    geometryFunction: [{ type: Input }],
    wrapX: [{ type: Input }],
    sourceVectorComponent: [{ type: ContentChild, args: [SourceVectorComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TileGridWMTSComponent extends TileGridComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new WMTS(this);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceTileWMTSComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
    /**
     * @return {?}
     */
    setLayerSource() {
        this.instance = new WMTS$1(this);
        this.host.instance.setSource(this.instance);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    }
}
SourceTileWMTSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-tilewmts',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceTileWMTSComponent)) }],
            },] },
];
/** @nocollapse */
SourceTileWMTSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatComponent {
    constructor() {
        this.componentType = 'format';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceVectorTileComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.formatComponent !== null && this.formatComponent !== undefined) {
            this.format = this.formatComponent.instance;
        }
        if (this.tileGridComponent !== null && this.tileGridComponent !== undefined) {
            this.tileGrid = this.tileGridComponent.instance;
        }
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceVectorTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-vectortile',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceVectorTileComponent)) }],
            },] },
];
/** @nocollapse */
SourceVectorTileComponent.ctorParameters = () => [
    { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceTileWMSComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceTileWMSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-tilewms',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceTileWMSComponent)) }],
            },] },
];
/** @nocollapse */
SourceTileWMSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceTileJSONComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceTileJSONComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-tilejson',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceTileJSONComponent)) }],
            },] },
];
/** @nocollapse */
SourceTileJSONComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
SourceTileJSONComponent.propDecorators = {
    url: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceGeoJSONComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceGeoJSONComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-geojson',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceGeoJSONComponent)) }],
            },] },
];
/** @nocollapse */
SourceGeoJSONComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
SourceGeoJSONComponent.propDecorators = {
    defaultDataProjection: [{ type: Input }],
    featureProjection: [{ type: Input }],
    geometryName: [{ type: Input }],
    url: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceImageStaticComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.onImageLoadStart = new EventEmitter();
        this.onImageLoadEnd = new EventEmitter();
        this.onImageLoadError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadStart.emit(event)));
        this.instance.on('imageloadend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadEnd.emit(event)));
        this.instance.on('imageloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadError.emit(event)));
    }
}
SourceImageStaticComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagestatic',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceImageStaticComponent)) }],
            },] },
];
/** @nocollapse */
SourceImageStaticComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceImageWMSComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.onImageLoadStart = new EventEmitter();
        this.onImageLoadEnd = new EventEmitter();
        this.onImageLoadError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadStart.emit(event)));
        this.instance.on('imageloadend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadEnd.emit(event)));
        this.instance.on('imageloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadError.emit(event)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceImageWMSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagewms',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceImageWMSComponent)) }],
            },] },
];
/** @nocollapse */
SourceImageWMSComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceImageArcGISRestComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.ratio = 1.5;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceImageArcGISRestComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagearcgisrest',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceImageArcGISRestComponent)) }],
            },] },
];
/** @nocollapse */
SourceImageArcGISRestComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
}
FeatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-feature',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
FeatureComponent.ctorParameters = () => [
    { type: SourceVectorComponent }
];
FeatureComponent.propDecorators = {
    id: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
}
SimpleGeometryComponent.propDecorators = {
    srid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryCircleComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new Circle([0, 0]);
    }
    /**
     * @return {?}
     */
    get radius() {
        return this.instance.getRadius();
    }
    /**
     * @param {?} radius
     * @return {?}
     */
    set radius(radius) {
        this.instance.setRadius(radius);
    }
}
GeometryCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-circle',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryCircleComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryCircleComponent.propDecorators = {
    radius: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryLinestringComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-linestring';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new LineString([[0, 0], [1, 1]]);
        super.ngOnInit();
    }
}
GeometryLinestringComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-linestring',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multilinestring';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new MultiLineString([[[0, 0], [1, 1]]]);
        super.ngOnInit();
    }
}
GeometryMultiLinestringComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-multilinestring',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryMultiLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryMultiPointComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipoint';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new MultiPoint([[0, 0], [1, 1]]);
        super.ngOnInit();
    }
}
GeometryMultiPointComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-multipoint',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryMultiPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipolygon';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new MultiPolygon([[[[0, 0], [1, 1], [0, 1]]]]);
        super.ngOnInit();
    }
}
GeometryMultiPolygonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-multipolygon',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryMultiPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryPointComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-point';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Point([0, 0]);
        super.ngOnInit();
    }
}
GeometryPointComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-point',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeometryPolygonComponent extends SimpleGeometryComponent {
    /**
     * @param {?} map
     * @param {?} host
     */
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-polygon';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Polygon([[[0, 0], [1, 1], [0, 1]]]);
        super.ngOnInit();
    }
}
GeometryPolygonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-polygon',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
GeometryPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-content',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
ContentComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverlayComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
}
OverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
OverlayComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoordinateComponent {
    /**
     * @param {?} map
     * @param {?} viewHost
     * @param {?} geometryPointHost
     * @param {?} geometryCircleHost
     * @param {?} overlayHost
     */
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
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
    ngOnInit() {
        this.map.instance.on('change:view', (/**
         * @param {?} e
         * @return {?}
         */
        e => this.onMapViewChanged(e)));
        this.mapSrid = this.map.instance
            .getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMapViewChanged(event) {
        this.mapSrid = event.target
            .get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    /**
     * @private
     * @return {?}
     */
    transformCoordinates() {
        /** @type {?} */
        let transformedCoordinates;
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
    }
}
CoordinateComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-coordinate',
                template: `
    <div class="aol-coordinate"></div>
  `,
            },] },
];
/** @nocollapse */
CoordinateComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ViewComponent, decorators: [{ type: Optional }] },
    { type: GeometryPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
    { type: OverlayComponent, decorators: [{ type: Optional }] }
];
CoordinateComponent.propDecorators = {
    x: [{ type: Input }],
    y: [{ type: Input }],
    srid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollectionCoordinatesComponent {
    /**
     * @param {?} map
     * @param {?} geometryLinestring
     * @param {?} geometryPolygon
     * @param {?} geometryMultipoint
     * @param {?} geometryMultilinestring
     * @param {?} geometryMultipolygon
     */
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
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
    ngOnInit() {
        this.map.instance.on('change:view', (/**
         * @param {?} e
         * @return {?}
         */
        e => this.onMapViewChanged(e)));
        this.mapSrid = this.map.instance
            .getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMapViewChanged(event) {
        this.mapSrid = event.target
            .get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    /**
     * @private
     * @return {?}
     */
    transformCoordinates() {
        /** @type {?} */
        let transformedCoordinates;
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
                    c => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} cc
                     * @return {?}
                     */
                    cc => cc.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => transform(c, this.srid, this.mapSrid)))));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = ((/** @type {?} */ (this.coordinates))).map((/**
                     * @param {?} ccc
                     * @return {?}
                     */
                    ccc => ccc.map((/**
                     * @param {?} cc
                     * @return {?}
                     */
                    cc => cc.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => transform(c, this.srid, this.mapSrid)))))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
}
CollectionCoordinatesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-collection-coordinates',
                template: `
    <div class="aol-collection-coordinates"></div>
  `,
            },] },
];
/** @nocollapse */
CollectionCoordinatesComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
];
CollectionCoordinatesComponent.propDecorators = {
    coordinates: [{ type: Input }],
    srid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleComponent {
    /**
     * @param {?} featureHost
     * @param {?} layerHost
     */
    constructor(featureHost, layerHost) {
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
    update() {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
}
StyleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
StyleComponent.ctorParameters = () => [
    { type: FeatureComponent, decorators: [{ type: Optional }] },
    { type: LayerVectorComponent, decorators: [{ type: Optional }] }
];
StyleComponent.propDecorators = {
    geometry: [{ type: Input }],
    fill: [{ type: Input }],
    image: [{ type: Input }],
    stroke: [{ type: Input }],
    text: [{ type: Input }],
    zIndex: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleCircleComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     * @return {?}
     */
    update() {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle$1(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes['radius']) {
            this.instance.setRadius(changes['radius'].currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    }
}
StyleCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-circle',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
StyleCircleComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
StyleCircleComponent.propDecorators = {
    fill: [{ type: Input }],
    radius: [{ type: Input }],
    snapToPixel: [{ type: Input }],
    stroke: [{ type: Input }],
    atlasManager: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleTextComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
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
    ngOnInit() {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
}
StyleTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-text',
                template: `
    <div class="aol-style-text"></div>
  `,
            },] },
];
/** @nocollapse */
StyleTextComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleStrokeComponent {
    /**
     * @param {?} styleHost
     * @param {?} styleCircleHost
     * @param {?} styleTextHost
     */
    constructor(styleHost, styleCircleHost, styleTextHost) {
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
    ngOnInit() {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
}
StyleStrokeComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-stroke',
                template: `
    <div class="aol-style-stroke"></div>
  `,
            },] },
];
/** @nocollapse */
StyleStrokeComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
StyleStrokeComponent.propDecorators = {
    color: [{ type: Input }],
    lineCap: [{ type: Input }],
    lineDash: [{ type: Input }],
    lineJoin: [{ type: Input }],
    miterLimit: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleIconComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
}
StyleIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-icon',
                template: `
    <div class="aol-style-icon"></div>
  `,
            },] },
];
/** @nocollapse */
StyleIconComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleFillComponent {
    /**
     * @param {?} styleHost
     * @param {?} styleCircleHost
     * @param {?} styleTextHost
     */
    constructor(styleHost, styleCircleHost, styleTextHost) {
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
    ngOnInit() {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    }
}
StyleFillComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-fill',
                template: `
    <div class="aol-style-fill"></div>
  `,
            },] },
];
/** @nocollapse */
StyleFillComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
StyleFillComponent.propDecorators = {
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultControlComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((/**
         * @param {?} c
         * @return {?}
         */
        c => this.map.instance.addControl(c)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((/**
         * @param {?} c
         * @return {?}
         */
        c => this.map.instance.removeControl(c)));
    }
}
DefaultControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-defaults',
                template: '',
            },] },
];
/** @nocollapse */
DefaultControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
DefaultControlComponent.propDecorators = {
    attribution: [{ type: Input }],
    attributionOptions: [{ type: Input }],
    rotate: [{ type: Input }],
    rotateOptions: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomOptions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.componentType = 'control';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlComponent.propDecorators = {
    content: [{ type: ContentChild, args: [ContentComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlAttributionComponent {
    /**
     * @param {?} map
     * @param {?} element
     */
    constructor(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    }
}
ControlAttributionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-attribution',
                template: ``,
            },] },
];
/** @nocollapse */
ControlAttributionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
ControlAttributionComponent.propDecorators = {
    collapsible: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlFullScreenComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
}
ControlFullScreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-fullscreen',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlFullScreenComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlFullScreenComponent.propDecorators = {
    className: [{ type: Input }],
    label: [{ type: Input }],
    labelActive: [{ type: Input }],
    tipLabel: [{ type: Input }],
    keys: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlMousePositionComponent {
    /**
     * @param {?} map
     * @param {?} element
     */
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    }
}
ControlMousePositionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-mouseposition',
                template: ``,
            },] },
];
/** @nocollapse */
ControlMousePositionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
ControlMousePositionComponent.propDecorators = {
    coordinateFormat: [{ type: Input }],
    projection: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlOverviewMapComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    }
    /**
     * @private
     * @return {?}
     */
    reloadInstance() {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
}
ControlOverviewMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-overviewmap',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlOverviewMapComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlRotateComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    }
}
ControlRotateComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-rotate',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlRotateComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlRotateComponent.propDecorators = {
    className: [{ type: Input }],
    label: [{ type: Input }],
    tipLabel: [{ type: Input }],
    duration: [{ type: Input }],
    autoHide: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlScaleLineComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-scaleline');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ScaleLine(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this.instance);
    }
}
ControlScaleLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-scaleline',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlScaleLineComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlScaleLineComponent.propDecorators = {
    units: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlZoomComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-zoom',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlZoomComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlZoomComponent.propDecorators = {
    duration: [{ type: Input }],
    zoomInLabel: [{ type: Input }],
    zoomOutLabel: [{ type: Input }],
    zoomInTipLabel: [{ type: Input }],
    zoomOutTipLabel: [{ type: Input }],
    delta: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlZoomSliderComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-zoomslider',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlZoomSliderComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlZoomSliderComponent.propDecorators = {
    className: [{ type: Input }],
    duration: [{ type: Input }],
    maxResolution: [{ type: Input }],
    minResolution: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlZoomToExtentComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomToExtentComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-zoomtoextent',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlZoomToExtentComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlZoomToExtentComponent.propDecorators = {
    className: [{ type: Input }],
    label: [{ type: Input }],
    tipLabel: [{ type: Input }],
    extent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
}
FormatMVTComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FormatMVTComponent)) }],
            },] },
];
/** @nocollapse */
FormatMVTComponent.ctorParameters = () => [];
FormatMVTComponent.propDecorators = {
    featureClass: [{ type: Input }],
    geometryName: [{ type: Input }],
    layerName: [{ type: Input }],
    layers: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = defaults$1();
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.map.instance.addInteraction(i)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.map.instance.removeInteraction(i)));
    }
}
DefaultInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-default',
                template: '',
            },] },
];
/** @nocollapse */
DefaultInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DoubleClickZoomInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DoubleClickZoomInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-doubleclickzoom',
                template: '',
            },] },
];
/** @nocollapse */
DoubleClickZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DoubleClickZoomInteractionComponent.propDecorators = {
    duration: [{ type: Input }],
    delta: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragAndDropInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragAndDropInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-draganddrop',
                template: '',
            },] },
];
/** @nocollapse */
DragAndDropInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragAndDropInteractionComponent.propDecorators = {
    formatConstructors: [{ type: Input }],
    projection: [{ type: Input }],
    target: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragBoxInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragBoxInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-dragbox',
                template: '',
            },] },
];
/** @nocollapse */
DragBoxInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragBoxInteractionComponent.propDecorators = {
    className: [{ type: Input }],
    condition: [{ type: Input }],
    boxEndCondition: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragPanInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragPanInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-dragpan',
                template: '',
            },] },
];
/** @nocollapse */
DragPanInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragPanInteractionComponent.propDecorators = {
    condition: [{ type: Input }],
    kinetic: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragRotateInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragRotateInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-dragrotate',
                template: '',
            },] },
];
/** @nocollapse */
DragRotateInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragRotateInteractionComponent.propDecorators = {
    condition: [{ type: Input }],
    duration: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragRotateAndZoomInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragRotateAndZoomInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-dragrotateandzoom',
                template: '',
            },] },
];
/** @nocollapse */
DragRotateAndZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragRotateAndZoomInteractionComponent.propDecorators = {
    condition: [{ type: Input }],
    duration: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragZoomInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragZoomInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-dragzoom',
                template: '',
            },] },
];
/** @nocollapse */
DragZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DragZoomInteractionComponent.propDecorators = {
    className: [{ type: Input }],
    condition: [{ type: Input }],
    duration: [{ type: Input }],
    out: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MouseWheelZoomInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
MouseWheelZoomInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-mousewheelzoom',
                template: '',
            },] },
];
/** @nocollapse */
MouseWheelZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
MouseWheelZoomInteractionComponent.propDecorators = {
    duration: [{ type: Input }],
    timeout: [{ type: Input }],
    useAnchor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PinchZoomInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
PinchZoomInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-pinchzoom',
                template: '',
            },] },
];
/** @nocollapse */
PinchZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
PinchZoomInteractionComponent.propDecorators = {
    duration: [{ type: Input }],
    constrainResolution: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DrawInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
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
    ngOnInit() {
        this.instance = new Draw(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChange.emit(event)));
        this.instance.on('change:active', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeActive.emit(event)));
        this.instance.on('drawend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDrawEnd.emit(event)));
        this.instance.on('drawstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDrawStart.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DrawInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-draw',
                template: '',
            },] },
];
/** @nocollapse */
DrawInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.onChange = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Select(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChange.emit(event)));
        this.instance.on('select', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onSelect.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
SelectInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-select',
                template: '',
            },] },
];
/** @nocollapse */
SelectInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModifyInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
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
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChange.emit(event)));
        this.instance.on('change:active', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeActive.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.instance.on('modifyend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onModifyEnd.emit(event)));
        this.instance.on('modifystart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onModifyStart.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
ModifyInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-modify',
                template: '',
            },] },
];
/** @nocollapse */
ModifyInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
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
    ngOnInit() {
        this.instance = new Translate(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChange.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.instance.on('translateend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onTranslateEnd.emit(event)));
        this.instance.on('translatestart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onTranslateStart.emit(event)));
        this.instance.on('translating', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onTranslating.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
TranslateInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-translate',
                template: '',
            },] },
];
/** @nocollapse */
TranslateInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributionComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    }
}
AttributionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-attribution',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
AttributionComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributionsComponent {
    /**
     * @param {?} source
     */
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((/**
             * @param {?} cmp
             * @return {?}
             */
            cmp => cmp.instance));
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
}
AttributionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
AttributionsComponent.ctorParameters = () => [
    { type: SourceComponent, decorators: [{ type: Host }] }
];
AttributionsComponent.propDecorators = {
    attributions: [{ type: ContentChildren, args: [AttributionComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceUTFGridComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceUTFGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-utfgrid',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceUTFGridComponent)) }],
            },] },
];
/** @nocollapse */
SourceUTFGridComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
SourceUTFGridComponent.propDecorators = {
    tileJSON: [{ type: Input }],
    url: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceMapboxVectorTileComponent extends SourceVectorTileComponent {
    /**
     * @param {?} layer
     * @param {?} map
     * @param {?} http
     */
    constructor(layer, map, http) {
        super(layer);
        this.map = map;
        this.http = http;
        this.styleLoaded = false;
        this.spriteJsonLoaded = false;
        this.glStyle = {};
        this.spriteData = {};
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this.http.get(this.styleUrl).subscribe((/**
         * @param {?} styleObject
         * @return {?}
         */
        styleObject => {
            this.glStyle = styleObject;
            this.styleLoaded = true;
            this.applyMapboxStyle();
        }));
        this.http.get(this.spriteJsonUrl).subscribe((/**
         * @param {?} spriteData
         * @return {?}
         */
        spriteData => {
            this.spriteData = spriteData;
            this.spriteJsonLoaded = true;
            this.applyMapboxStyle();
        }));
    }
    /**
     * @return {?}
     */
    applyMapboxStyle() {
        // set the mapbox style
        if (this.spriteJsonLoaded && this.styleLoaded) {
            stylefunction(this.host.instance, this.glStyle, this.sourceName, undefined, this.spriteData, this.spriteUrl);
            applyBackground(this.map.instance, this.glStyle);
        }
    }
}
SourceMapboxVectorTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-mapbox',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceMapboxVectorTileComponent)) }],
            },] },
];
/** @nocollapse */
SourceMapboxVectorTileComponent.ctorParameters = () => [
    { type: LayerVectorTileComponent, decorators: [{ type: Host }] },
    { type: MapComponent },
    { type: HttpClient }
];
SourceMapboxVectorTileComponent.propDecorators = {
    styleUrl: [{ type: Input }],
    sourceName: [{ type: Input }],
    spriteJsonUrl: [{ type: Input }],
    spriteUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
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
class AngularOpenlayersModule {
}
AngularOpenlayersModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                imports: [CommonModule, HttpClientModule],
                exports: COMPONENTS,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MapComponent, ViewComponent, GraticuleComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, SourceOsmComponent, SourceBingmapsComponent, SourceClusterComponent, SourceUTFGridComponent, SourceVectorComponent, SourceXYZComponent, SourceVectorTileComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceTileJSONComponent, SourceGeoJSONComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceRasterComponent, SourceImageArcGISRestComponent, FeatureComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GeometryCircleComponent, CoordinateComponent, CollectionCoordinatesComponent, StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, DefaultControlComponent, ControlComponent, ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, FormatMVTComponent, TileGridComponent, TileGridWMTSComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent, PinchZoomInteractionComponent, DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent, OverlayComponent, ContentComponent, AttributionsComponent, AttributionComponent, SourceMapboxVectorTileComponent, AngularOpenlayersModule, FormatComponent as ɵc, SimpleGeometryComponent as ɵd, LayerComponent as ɵa, SourceComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9wZW5sYXllcnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9tYXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9ncmF0aWN1bGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcmdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9zb3VyY2UuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9yYXN0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy94eXouY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9vc20uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvdGlsZWdyaWR3bXRzLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvdGlsZXdtcy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3RpbGVqc29uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvZ2VvanNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL2ltYWdlc3RhdGljLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3NvdXJjZXMvaW1hZ2V3bXMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9pbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZmVhdHVyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ2VvbS9nZW9tZXRyeWxpbmVzdHJpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2dlb20vZ2VvbWV0cnlwb2ludC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL292ZXJsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29vcmRpbmF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb2xsZWN0aW9uY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc3R5bGVzL3N0cm9rZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zdHlsZXMvZmlsbC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL3JvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy9zY2FsZWxpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvY29udHJvbHMvem9vbS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9kcmFnYW5kZHJvcC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ2JveC5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3Bhbi5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZWFuZHpvb20uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9tb3VzZXdoZWVsem9vbS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvcGluY2h6b29tLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9kcmF3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvaW50ZXJhY3Rpb25zL21vZGlmeS5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9pbnRlcmFjdGlvbnMvdHJhbnNsYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2F0dHJpYnV0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvbGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiLCJuZzovL25neC1vcGVubGF5ZXJzL2xpYi9zb3VyY2VzL3V0ZmdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtb3BlbmxheWVycy9saWIvc291cmNlcy9zb3VyY2UtbWFwYm94LXZlY3Rvci10aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW9wZW5sYXllcnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcclxuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xyXG5pbXBvcnQgTWFwRXZlbnQgZnJvbSAnb2wvTWFwRXZlbnQnO1xyXG5pbXBvcnQgT2JqZWN0RXZlbnQgZnJvbSAnb2wvT2JqZWN0JztcclxuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IE1hcDtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHdpZHRoID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0ID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogRWxlbWVudCB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbk1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb3N0Q29tcG9zZTogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25QcmVDb21wb3NlOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25TaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcblxyXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xyXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcclxuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25EYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xyXG4gICAgdGhpcy5vbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25Qb3N0Q29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9zdFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJlQ29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWFwKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRUYXJnZXQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25EYmxDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vbk1vdmVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vblBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25Qb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25Qb3N0Q29tcG9zZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vblBvc3RSZW5kZXIuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25QcmVDb21wb3NlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25TaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC12aWV3JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBWaWV3O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3ZpZXcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnN0cmFpblJvdGF0aW9uOiBib29sZWFuIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZW5hYmxlUm90YXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6b29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6b29tRmFjdG9yOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjZW50ZXI6IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB6b29tQW5pbWF0aW9uID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5WaWV3IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnpvb20nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlWm9vbS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub25DaGFuZ2VSZXNvbHV0aW9uLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlQ2VudGVyLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICBjYXNlICd6b29tJzpcclxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21BbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFuaW1hdGUoeyB6b29tOiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Wm9vbShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3Byb2plY3Rpb24nOlxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtdmlldywgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXZpZXcnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyYXRpY3VsZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ3JhdGljdWxlJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JhdGljdWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dyYXRpY3VsZSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3Ryb2tlU3R5bGU6IFN0cm9rZTtcclxuICBASW5wdXQoKVxyXG4gIHNob3dMYWJlbHM6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBsb25MYWJlbFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBsYXRMYWJlbFBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JhdGljdWxlKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcmF0aWN1bGUoe1xyXG4gICAgICBzdHJva2VTdHlsZTogdGhpcy5zdHJva2VTdHlsZSxcclxuICAgICAgc2hvd0xhYmVsczogdGhpcy5zaG93TGFiZWxzLFxyXG4gICAgICBsb25MYWJlbFBvc2l0aW9uOiB0aGlzLmxvbkxhYmVsUG9zaXRpb24sXHJcbiAgICAgIGxhdExhYmVsUG9zaXRpb246IHRoaXMubGF0TGFiZWxQb3NpdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJ29sL2V2ZW50cyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IGFueTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdsYXllcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJlY29tcG9zZTogKGV2dDogRXZlbnQpID0+IHZvaWQ7XHJcbiAgQElucHV0KClcclxuICBwb3N0Y29tcG9zZTogKGV2dDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnByZWNvbXBvc2UgIT09IG51bGwgJiYgdGhpcy5wcmVjb21wb3NlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIHRoaXMucHJlY29tcG9zZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb3N0Y29tcG9zZSAhPT0gbnVsbCAmJiB0aGlzLnBvc3Rjb21wb3NlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCB0aGlzLnBvc3Rjb21wb3NlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5wdXNoKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucmVtb3ZlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBpZiAoa2V5ID09PSAncHJlY29tcG9zZScpIHtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3ByZWNvbXBvc2UnLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVjb21wb3NlJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPT09ICdwb3N0Y29tcG9zZScpIHtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3Bvc3Rjb21wb3NlJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1sYXllciwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllckdyb3VwQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgb2wubGF5ZXIuR3JvdXAgaW5zdGFuY2Ugd2l0aDpgLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JvdXAodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItaW1hZ2UnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVySW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgc291cmNlOiBJbWFnZTtcclxuXHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB6SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZSh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci10aWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllclRpbGVDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBzb3VyY2U6IFRpbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJlbG9hZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXNlSW50ZXJpbVRpbGVzT25FcnJvcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZSh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci12ZWN0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgc291cmNlOiBWZWN0b3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlZlY3RvciBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtWZWN0b3JUaWxlfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7UmVuZGVyVHlwZX0gZnJvbSAnb2wvbGF5ZXIvVmVjdG9yVGlsZSc7XHJcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSAnb2wnO1xyXG5pbXBvcnQge1N0eWxlfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllckNvbXBvbmVudH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVyR3JvdXBDb21wb25lbnR9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlRnVuY3Rpb259IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcnRpbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICByZW5kZXJNb2RlOiBSZW5kZXJUeXBlIHwgc3RyaW5nO1xyXG4gIC8qIG5vdCBtYXJrZWQgYXMgb3B0aW9uYWwgaW4gdGhlIHR5cGluZ3MgKi9cclxuICBASW5wdXQoKVxyXG4gIHJlbmRlck9yZGVyOiAoZmVhdHVyZTE6IEZlYXR1cmUsIGZlYXR1cmUyOiBGZWF0dXJlKSA9PiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzdHlsZTogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBkZWNsdXR0ZXI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTb3VyY2U7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc291cmNlJztcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IExheWVyQ29tcG9uZW50LCBwcm90ZWN0ZWQgcmFzdGVyPzogU291cmNlUmFzdGVyQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5ob3N0Lmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFzdGVyKSB7XHJcbiAgICAgIHRoaXMucmFzdGVyLnNvdXJjZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXIoczogU291cmNlKSB7XHJcbiAgICBpZiAodGhpcy5ob3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2Uocyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFzdGVyKSB7XHJcbiAgICAgIHRoaXMucmFzdGVyLnNvdXJjZXMgPSBbc107XHJcbiAgICAgIHRoaXMucmFzdGVyLmluaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY3JlYXRlWFlaIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogVGlsZUdyaWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICBtYXhab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5ab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcclxuICBASW5wdXQoKVxyXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICByZXNvbHV0aW9uczogbnVtYmVyW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYXN0ZXIsIFNvdXJjZSB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFJhc3Rlck9wZXJhdGlvblR5cGUsIFJhc3RlclNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1Jhc3Rlcic7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1yYXN0ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VSYXN0ZXJDb21wb25lbnQpLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlUmFzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW5zdGFuY2U6IFJhc3RlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBvcGVyYXRpb24/OiBPcGVyYXRpb247XHJcbiAgQElucHV0KClcclxuICB0aHJlYWRzPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGliPzogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgb3BlcmF0aW9uVHlwZT86IFJhc3Rlck9wZXJhdGlvblR5cGU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGJlZm9yZU9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFmdGVyT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIHNvdXJjZXM6IFNvdXJjZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmFzdGVyKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmVmb3Jlb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYmVmb3JlT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdhZnRlcm9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmFmdGVyT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFhZWiB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcclxuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uLCBVcmxGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXh5eicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VYWVpDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlWFlaQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogWFlaO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3BhcXVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XHJcbiAgQElucHV0KClcclxuICB0aWxlVXJsRnVuY3Rpb24/OiBVcmxGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudClcclxuICB0aWxlR3JpZFhZWjogVGlsZUdyaWRDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkU3RhcnQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEhvc3QoKVxyXG4gICAgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICByYXN0ZXI/OiBTb3VyY2VSYXN0ZXJDb21wb25lbnRcclxuICApIHtcclxuICAgIHN1cGVyKGxheWVyLCByYXN0ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcclxuICAgICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRYWVouaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFhZWih0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBmb3J3YXJkUmVmLCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9TTSB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlWFlaQ29tcG9uZW50IH0gZnJvbSAnLi94eXouY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlUmFzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xyXG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2Utb3NtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2Utb3NtXCI+PC9kaXY+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlT3NtQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZU9zbUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVhZWkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGluc3RhbmNlOiBPU007XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBtYXhab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBvcGFxdWU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBIb3N0KClcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gICAgQEhvc3QoKVxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIHJhc3Rlcj86IFNvdXJjZVJhc3RlckNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5ZXIsIHJhc3Rlcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy50aWxlR3JpZFhZWikge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE9TTSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmluZ01hcHMgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWJpbmdtYXBzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2UtYmluZ21hcHNcIj48L2Rpdj5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IEJpbmdNYXBzO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGlkcGk6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBjdWx0dXJlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBrZXk6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGltYWdlcnlTZXQ6ICdSb2FkJyB8ICdBZXJpYWwnIHwgJ0FlcmlhbFdpdGhMYWJlbHMnIHwgJ2NvbGxpbnNCYXJ0JyB8ICdvcmRuYW5jZVN1cnZleScgPSAnQWVyaWFsJztcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQmluZ01hcHModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFZlY3RvcjtcclxuICBASW5wdXQoKVxyXG4gIG92ZXJsYXBzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXNlU3BhdGlhbEluZGV4OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdDogRmVhdHVyZTtcclxuICBASW5wdXQoKVxyXG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsdXN0ZXIsIFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtY2x1c3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VDbHVzdGVyQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUNsdXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbnN0YW5jZTogQ2x1c3RlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBkaXN0YW5jZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IChmZWF0dXJlOiBGZWF0dXJlKSA9PiBQb2ludDtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChTb3VyY2VWZWN0b3JDb21wb25lbnQpXHJcbiAgc291cmNlVmVjdG9yQ29tcG9uZW50OiBTb3VyY2VWZWN0b3JDb21wb25lbnQ7XHJcbiAgc291cmNlOiBWZWN0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuc291cmNlVmVjdG9yQ29tcG9uZW50Lmluc3RhbmNlO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2x1c3Rlcih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTJztcclxuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtdGlsZWdyaWQtd210cycsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlsZUdyaWRXTVRTQ29tcG9uZW50IGV4dGVuZHMgVGlsZUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBXTVRTO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICBvcmlnaW5zPzogQ29vcmRpbmF0ZVtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF0cml4SWRzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHNpemVzPzogU2l6ZVtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVNpemVzPzogKG51bWJlciB8IFNpemUpW107XHJcbiAgQElucHV0KClcclxuICB3aWR0aHM/OiBudW1iZXJbXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZFdNVFNDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZHdtdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV01UUyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFdNVFMgYXMgVGlsZUdyaWRXTVRTIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgeyBXTVRTUmVxdWVzdEVuY29kaW5nIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtdHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNVFNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNVFNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBXTVRTO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aWxlR3JpZDogVGlsZUdyaWRXTVRTO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZD86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlcXVlc3RFbmNvZGluZz86IFdNVFNSZXF1ZXN0RW5jb2RpbmcgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVDbGFzcz86IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVyc2lvbj86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdD86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hdHJpeFNldDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGltZW5zaW9ucz86IE9iamVjdDtcclxuICBASW5wdXQoKVxyXG4gIHVybD86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmxzPzogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRXTVRTQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkV01UUzogVGlsZUdyaWRXTVRTQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICBjYXNlICd1cmwnOlxyXG4gICAgICAgICAgICB0aGlzLnVybCA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHNldExheWVyU291cmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRpbGVHcmlkV01UUykge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFdNVFMuaW5zdGFuY2U7XHJcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1hdENvbXBvbmVudCB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBGZWF0dXJlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2Zvcm1hdCc7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEhvc3QsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgVmVjdG9yVGlsZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yVGlsZSc7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcclxuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcclxuaW1wb3J0IHtMYXllclZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb3JtYXRDb21wb25lbnR9IGZyb20gJy4uL2Zvcm1hdHMvZm9ybWF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGlsZUdyaWRDb21wb25lbnR9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlQ29tcG9uZW50fSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Byb2plY3Rpb25MaWtlfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHtVcmxGdW5jdGlvbn0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9ydGlsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQpfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBWZWN0b3JUaWxlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBvdmVybGFwczogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVVcmxGdW5jdGlvbjogVXJsRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHVybHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRm9ybWF0Q29tcG9uZW50KVxyXG4gIGZvcm1hdENvbXBvbmVudDogRm9ybWF0Q29tcG9uZW50O1xyXG4gIGZvcm1hdDogRmVhdHVyZTtcclxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkQ29tcG9uZW50OiBUaWxlR3JpZENvbXBvbmVudDtcclxuICB0aWxlR3JpZDogVGlsZUdyaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgLyogbmVlZCB0aGUgY2hpbGRyZW4gdG8gY29uc3RydWN0IHRoZSBPTDMgb2JqZWN0ICovXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0Q29tcG9uZW50ICE9PSBudWxsICYmIHRoaXMuZm9ybWF0Q29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmZvcm1hdENvbXBvbmVudC5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbGVHcmlkQ29tcG9uZW50ICE9PSBudWxsICYmIHRoaXMudGlsZUdyaWRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZENvbXBvbmVudC5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zb3VyY2UuVmVjdG9yVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlV01TIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgVGlsZUdyaWQgfSBmcm9tICdvbC90aWxlZ3JpZCc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXRpbGV3bXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBUaWxlV01TO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBoaWRwaTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHBhcmFtczogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNlcnZlclR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZVdNUyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaWxlSlNPTiB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxlanNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlSlNPTkNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlSlNPTkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFRpbGVKU09OO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlSlNPTih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBHZW9KU09OIH0gZnJvbSAnb2wvZm9ybWF0JztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1nZW9qc29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUdlb0pTT05Db21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlR2VvSlNPTkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFZlY3RvcjtcclxuICBmb3JtYXQ6IEZlYXR1cmU7XHJcbiAgQElucHV0KClcclxuICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mb3JtYXQgPSBuZXcgR2VvSlNPTih0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRpYyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlc3RhdGljJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogSW1hZ2VTdGF0aWM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZUV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBpbWFnZVNpemU/OiBTaXplO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZVN0YXRpYyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZXdtcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZVdNU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZVdNU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBpbnN0YW5jZTogSW1hZ2VXTVM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGlkcGk6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzZXJ2ZXJUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHBhcmFtczogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICByYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbnM6IEFycmF5PG51bWJlcj47XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VXTVModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2Fkc3RhcnQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlQXJjR0lTUmVzdCB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlYXJjZ2lzcmVzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBJbWFnZUFyY0dJU1Jlc3Q7XHJcblxyXG4gIEBJbnB1dCgpIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlW107XHJcbiAgQElucHV0KCkgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KCkgcGFyYW1zPzogeyBbazogc3RyaW5nXTogYW55IH07XHJcbiAgQElucHV0KCkgcmF0aW8gPSAxLjU7XHJcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM/OiBudW1iZXJbXTtcclxuICBASW5wdXQoKSB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZUFyY0dJU1Jlc3QodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy92ZWN0b3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWZlYXR1cmUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdmZWF0dXJlJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IEZlYXR1cmU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGZWF0dXJlKCk7XHJcbiAgICBpZiAodGhpcy5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuYWRkRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnJlbW92ZUZlYXR1cmUodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlR2VvbWV0cnk7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc2ltcGxlLWdlb21ldHJ5JztcclxuXHJcbiAgQElucHV0KCkgc3JpZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWFwOiBNYXBDb21wb25lbnQsIHByb3RlY3RlZCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRHZW9tZXRyeSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LWNpcmNsZSc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0UmFkaXVzKCk7XHJcbiAgfVxyXG4gIHNldCByYWRpdXMocmFkaXVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICAgIC8vIGRlZmF1bHRpbmcgY29vcmRpbmF0ZXMgdG8gWzAsMF0uIFRvIGJlIG92ZXJyaWRkZW4gaW4gY2hpbGQgY29tcG9uZW50LlxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUoWzAsIDBdKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaW5lU3RyaW5nIH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1saW5lc3RyaW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbGluZXN0cmluZyc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBMaW5lU3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBMaW5lU3RyaW5nKFtbMCwgMF0sIFsxLCAxXV0pO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aUxpbmVTdHJpbmcgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpbGluZXN0cmluZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJztcclxuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpTGluZVN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlMaW5lU3RyaW5nKFtbWzAsIDBdLCBbMSwgMV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpcG9pbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvaW50JztcclxuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpUG9pbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9pbnQoW1swLCAwXSwgWzEsIDFdXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpUG9seWdvbiB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbXVsdGlwb2x5Z29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlQb2x5Z29uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobWFwLCBob3N0KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNdWx0aVBvbHlnb24oW1tbWzAsIDBdLCBbMSwgMV0sIFswLCAxXV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1wb2ludCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlQb2ludENvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1wb2ludCc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9pbnQoWzAsIDBdKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktcG9seWdvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LXBvbHlnb24nO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogUG9seWdvbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKG1hcCwgaG9zdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9seWdvbihbW1swLCAwXSwgWzEsIDFdLCBbMCwgMV1dXSk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXksIFBhbk9wdGlvbnMgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IE92ZXJsYXlQb3NpdGlvbmluZyBmcm9tICdvbC9PdmVybGF5UG9zaXRpb25pbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtb3ZlcmxheScsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29tcG9uZW50VHlwZSA9ICdvdmVybGF5JztcclxuICBpbnN0YW5jZTogT3ZlcmxheTtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudClcclxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXQ6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgcG9zaXRpb25pbmc6IE92ZXJsYXlQb3NpdGlvbmluZyB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHN0b3BFdmVudDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGluc2VydEZpcnN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b1BhbjogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9QYW5BbmltYXRpb246IFBhbk9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICBhdXRvUGFuTWFyZ2luOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJsYXkodGhpcyk7XHJcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZE92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZU92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29vcmRpbmF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtY29vcmRpbmF0ZVwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogYW55O1xyXG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHg6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHk6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNyaWQgPSAnRVBTRzozODU3JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgdmlld0hvc3Q6IFZpZXdDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvaW50SG9zdDogR2VvbWV0cnlQb2ludENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5Q2lyY2xlSG9zdDogR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBvdmVybGF5SG9zdDogT3ZlcmxheUNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvb3JkaW5hdGUnKTtcclxuICAgIGlmIChnZW9tZXRyeVBvaW50SG9zdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeVBvaW50SG9zdDtcclxuICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlDaXJjbGVIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5Q2lyY2xlSG9zdDtcclxuICAgIH0gZWxzZSBpZiAodmlld0hvc3QgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gdmlld0hvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKG92ZXJsYXlIb3N0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IG92ZXJsYXlIb3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCBlID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZVxyXG4gICAgICAuZ2V0VmlldygpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xyXG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgIC5nZXQoZXZlbnQua2V5KVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGlmICh0aGlzLnNyaWQgPT09IHRoaXMubWFwU3JpZCkge1xyXG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gW3RoaXMueCwgdGhpcy55XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0cmFuc2Zvcm0oW3RoaXMueCwgdGhpcy55XSwgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgY2FzZSAnZ2VvbWV0cnktcG9pbnQnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZ2VvbWV0cnktY2lyY2xlJzpcclxuICAgICAgY2FzZSAndmlldyc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENlbnRlcih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnb3ZlcmxheSc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFBvc2l0aW9uKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXNcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkNvb3JkaW5hdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogYW55O1xyXG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XHJcbiAgQElucHV0KClcclxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TGluZXN0cmluZzogR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2x5Z29uOiBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9pbnQ6IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nOiBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2x5Z29uOiBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgaWYgKCEhZ2VvbWV0cnlMaW5lc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TGluZXN0cmluZztcclxuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeVBvbHlnb24pIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2x5Z29uO1xyXG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlwb2ludCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmcpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc7XHJcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvbHlnb24pIHtcclxuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvbHlnb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzIG11c3QgYmUgYSBjaGlsZCBvZiBhIGdlb21ldHJ5IGNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCBlID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XHJcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZVxyXG4gICAgICAuZ2V0VmlldygpXHJcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcclxuICAgICAgLmdldENvZGUoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xyXG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgIC5nZXQoZXZlbnQua2V5KVxyXG4gICAgICAuZ2V0UHJvamVjdGlvbigpXHJcbiAgICAgIC5nZXRDb2RlKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcclxuXHJcbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcclxuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbGluZXN0cmluZyc6XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2ludCc6XHJcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKDxDb29yZGluYXRlW10+dGhpcy5jb29yZGluYXRlcykubWFwKGMgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1wb2x5Z29uJzpcclxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnOlxyXG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICg8Q29vcmRpbmF0ZVtdW10+dGhpcy5jb29yZGluYXRlcykubWFwKGNjID0+XHJcbiAgICAgICAgICAgIGNjLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2x5Z29uJzpcclxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAoPENvb3JkaW5hdGVbXVtdW10+dGhpcy5jb29yZGluYXRlcykubWFwKGNjYyA9PlxyXG4gICAgICAgICAgICBjY2MubWFwKGNjID0+IGNjLm1hcChjID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGwsIEltYWdlLCBTdHJva2UsIFN0eWxlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQgfCBMYXllclZlY3RvckNvbXBvbmVudDtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFN0eWxlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlJztcclxuXHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmlsbDogRmlsbDtcclxuICBASW5wdXQoKVxyXG4gIGltYWdlOiBJbWFnZTtcclxuICBASW5wdXQoKVxyXG4gIHN0cm9rZTogU3Ryb2tlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dDogVGV4dDtcclxuICBASW5wdXQoKVxyXG4gIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmZWF0dXJlSG9zdDogRmVhdHVyZUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgbGF5ZXJIb3N0OiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZScpO1xyXG4gICAgdGhpcy5ob3N0ID0gISFmZWF0dXJlSG9zdCA/IGZlYXR1cmVIb3N0IDogbGF5ZXJIb3N0O1xyXG4gICAgaWYgKCF0aGlzLmhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUgbXVzdCBiZSBhcHBsaWVkIHRvIGEgZmVhdHVyZSBvciBhIGxheWVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgc3R5bGVcXCdzIGhvc3Q6ICcsIHRoaXMuaG9zdCk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuY2hhbmdlZCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHlsZSh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHlsZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXRsYXNNYW5hZ2VyLCBDaXJjbGUsIEZpbGwsIFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLWNpcmNsZSc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmlsbDogRmlsbDtcclxuICBASW5wdXQoKVxyXG4gIHJhZGl1czogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzdHJva2U6IFN0cm9rZTtcclxuICBASW5wdXQoKVxyXG4gIGF0bGFzTWFuYWdlcjogQXRsYXNNYW5hZ2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdPUkstQVJPVU5EOiBzaW5jZSB0aGUgcmUtcmVuZGVyaW5nIGlzIG5vdCB0cmlnZ2VyZWQgb24gc3R5bGUgY2hhbmdlXHJcbiAgICogd2UgdHJpZ2dlciBhIHJhZGl1cyBjaGFuZ2UuXHJcbiAgICogc2VlIG9wZW5sYXllcnMgIzYyMzMgYW5kICM1Nzc1XHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCEhdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2VcXCdzIHJhZGl1cycpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyh0aGlzLnJhZGl1cyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3JhZGl1cyddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtY2lyY2xlLCBzZXR0aW5nIG5ldyByYWRpdXM6ICcsIGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtc3R5bGUtY2lyY2xlJyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UobnVsbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLXRleHQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXRleHRcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogVGV4dDtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS10ZXh0JztcclxuXHJcbiAgQElucHV0KClcclxuICBmb250OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRYOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRZOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBzY2FsZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICByb3RhdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dEFsaWduOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB0ZXh0QmFzZUxpbmU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge1xyXG4gICAgaWYgKCFob3N0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXRleHQgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLXRleHQgd2l0aDogJywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5UZXh0IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUZXh0KHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFRleHQodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2ZvbnQnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldEZvbnQoY2hhbmdlc1snZm9udCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snb2Zmc2V0WCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T2Zmc2V0WChjaGFuZ2VzWydvZmZzZXRYJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydvZmZzZXRZJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRZKGNoYW5nZXNbJ29mZnNldFknXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NjYWxlJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzWydzY2FsZSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sncm90YXRpb24nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXNbJ3JvdGF0aW9uJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd0ZXh0J10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0KGNoYW5nZXNbJ3RleHQnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3RleHRBbGlnbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dEFsaWduKGNoYW5nZXNbJ3RleHRBbGlnbiddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sndGV4dEJhc2VMaW5lJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QmFzZWxpbmUoY2hhbmdlc1sndGV4dEJhc2VMaW5lJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS10ZXh0LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnb2wvY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtc3Ryb2tlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1zdHJva2VcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVTdHJva2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTdHJva2U7XHJcbiAgLyogdGhlIHR5cGluZ3MgZG8gbm90IGhhdmUgdGhlIHNldHRlcnMgKi9cclxuICBwcml2YXRlIGhvc3Q6IC8qU3R5bGVDb21wb25lbnR8U3R5bGVDaXJjbGVDb21wb25lbnR8U3R5bGVUZXh0Q29tcG9uZW50Ki8gYW55O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBDb2xvciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIGxpbmVDYXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIGxpbmVEYXNoOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIGxpbmVKb2luOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBtaXRlckxpbWl0OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlSG9zdDogU3R5bGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVUZXh0SG9zdDogU3R5bGVUZXh0Q29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBpZiAoIXN0eWxlSG9zdCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZS1zdHJva2UgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoISFzdHlsZVRleHRIb3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlVGV4dEhvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKCEhc3R5bGVDaXJjbGVIb3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlQ2lyY2xlSG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlSG9zdDtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtc3Ryb2tlIHdpdGg6ICcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuU3Ryb2tlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHJva2UodGhpcyk7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N0eWxlJzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3Ryb2tlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlIGluc3RhbmNlXFwncyBzdHJva2U6JywgdGhpcy5ob3N0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3R5bGUtdGV4dCc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0cm9rZSh0aGlzLmluc3RhbmNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3R5bGUtY2lyY2xlJzpcclxuICAgICAgICB0aGlzLmhvc3Quc3Ryb2tlID0gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5jaXJjbGUgaW5zdGFuY2VcXCdzIHN0cm9rZTonLCB0aGlzLmhvc3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBob3N0IHR5cGU6ICcgKyB0aGlzLmhvc3QpO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snY29sb3InXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldENvbG9yKGNoYW5nZXNbJ2NvbG9yJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydsaW5lQ2FwJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRMaW5lQ2FwKGNoYW5nZXNbJ2xpbmVDYXAnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2xpbmVEYXNoJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRMaW5lRGFzaChjaGFuZ2VzWydsaW5lRGFzaCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snbGluZUpvaW4nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVKb2luKGNoYW5nZXNbJ2xpbmVKb2luJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydtaXRlckxpbWl0J10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRNaXRlckxpbWl0KGNoYW5nZXNbJ21pdGVyTGltaXQnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3dpZHRoJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRXaWR0aChjaGFuZ2VzWyd3aWR0aCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtc3Ryb2tlLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xyXG5pbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1pY29uXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IEljb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgYW5jaG9yWFVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XHJcbiAgQElucHV0KClcclxuICBhbmNob3JZVW5pdHM6IEljb25BbmNob3JVbml0cztcclxuICBASW5wdXQoKVxyXG4gIGFuY2hvck9yaWdpbjogSWNvbk9yaWdpbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBJY29uT3JpZ2luO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgQElucHV0KClcclxuICBvZmZzZXRPcmlnaW46IEljb25PcmlnaW47XHJcbiAgQElucHV0KClcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzY2FsZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nU2l6ZTogW251bWJlciwgbnVtYmVyXTtcclxuICBASW5wdXQoKVxyXG4gIHNyYzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ29wYWNpdHknXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9wYWNpdHkoY2hhbmdlc1snb3BhY2l0eSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sncm90YXRpb24nXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXNbJ3JvdGF0aW9uJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydzY2FsZSddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlc1snc2NhbGUnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcclxuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWljb246ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsbCB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnb2wvY29sb3InO1xyXG5pbXBvcnQgeyBDb2xvckxpa2UgfSBmcm9tICdvbC9jb2xvcmxpa2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtZmlsbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtZmlsbFwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZUZpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgLyogdGhlIHR5cGluZ3MgZG8gbm90IGhhdmUgdGhlIHNldHRlcnMgKi9cclxuICBwcml2YXRlIGhvc3Q6IC8qU3R5bGVDb21wb25lbnR8U3R5bGVDaXJjbGVDb21wb25lbnR8U3R5bGVUZXh0Q29tcG9uZW50Ki8gYW55O1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogRmlsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvcjogQ29sb3IgfCBDb2xvckxpa2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVIb3N0OiBTdHlsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlQ2lyY2xlSG9zdDogU3R5bGVDaXJjbGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZVRleHRIb3N0OiBTdHlsZVRleHRDb21wb25lbnRcclxuICApIHtcclxuICAgIGlmICghc3R5bGVIb3N0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXN0cm9rZSBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcclxuICAgIH1cclxuICAgIGlmICghIXN0eWxlVGV4dEhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVUZXh0SG9zdDtcclxuICAgIH0gZWxzZSBpZiAoISFzdHlsZUNpcmNsZUhvc3QpIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVDaXJjbGVIb3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVIb3N0O1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZS1maWxsIHdpdGg6ICcsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuRmlsbCBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRmlsbCh0aGlzKTtcclxuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRGaWxsKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlIGluc3RhbmNlXFwncyBmaWxsOicsIHRoaXMuaG9zdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0eWxlLXRleHQnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRGaWxsKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdHlsZS1jaXJjbGUnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5maWxsID0gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5jaXJjbGUgaW5zdGFuY2VcXCdzIGZpbGw6JywgdGhpcy5ob3N0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaG9zdCB0eXBlOiAnICsgdGhpcy5ob3N0KTtcclxuICAgICAgLy8gYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2NvbG9yJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRDb2xvcihjaGFuZ2VzWydjb2xvciddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtZmlsbCwgc2V0dGluZyBuZXcgY29sb3I6ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBPcHRpb25zIGFzIEF0dHJpYnV0aW9uT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xyXG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XHJcbmltcG9ydCB7IE9wdGlvbnMgYXMgWm9vbU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1pvb20nO1xyXG5cclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxDb250cm9sPjtcclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25PcHRpb25zOiBBdHRyaWJ1dGlvbk9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICByb3RhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21PcHRpb25zOiBab29tT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5kZWZhdWx0cyBpbml0OiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2woYykpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZGVmYXVsdHMnKTtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2woYykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XHJcbiAgaW5zdGFuY2U6IENvbnRyb2w7XHJcbiAgZWxlbWVudDogRWxlbWVudDtcclxuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQpXHJcbiAgY29udGVudDogQ29udGVudENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ29udHJvbCh0aGlzKTtcclxuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWF0dHJpYnV0aW9uJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XHJcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xyXG4gIHRhcmdldDogRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLkF0dHJpYnV0aW9uIGluaXQ6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdHRyaWJ1dGlvbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1hdHRyaWJ1dGlvbicpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IEZ1bGxTY3JlZW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWxBY3RpdmU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBrZXlzOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1mdWxsc2NyZWVuJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRnVsbFNjcmVlbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1mdWxsc2NyZWVuJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgTW91c2VQb3NpdGlvbiBmcm9tICdvbC9jb250cm9sL01vdXNlUG9zaXRpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZUZvcm1hdCB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogTW91c2VQb3NpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGNvb3JkaW5hdGVGb3JtYXQ6IENvb3JkaW5hdGVGb3JtYXQ7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICB0YXJnZXQ6IEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuTW91c2VQb3NpdGlvbiBpbml0OiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW91c2VQb3NpdGlvbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBPdmVydmlld01hcCB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtb3ZlcnZpZXdtYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdmVydmlld01hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBPdmVydmlld01hcDtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNlTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyczogTGF5ZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldDogRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB2aWV3OiBWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbCAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCd2aWV3JykpIHtcclxuICAgICAgdGhpcy5yZWxvYWRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWxvYWRJbnN0YW5jZSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm90YXRlIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1yb3RhdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xSb3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFJvdGF0ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9IaWRlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSb3RhdGUodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtcm90YXRlJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2FsZUxpbmUgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXNjYWxlbGluZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogU2NhbGVMaW5lO1xyXG4gIEBJbnB1dCgpXHJcbiAgdW5pdHM6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtc2NhbGVsaW5lJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2NhbGVMaW5lKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXNjYWxlbGluZScpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWm9vbSB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFpvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpvb21JbkxhYmVsOiBzdHJpbmcgfCBOb2RlO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbU91dExhYmVsOiBzdHJpbmcgfCBOb2RlO1xyXG4gIEBJbnB1dCgpXHJcbiAgem9vbUluVGlwTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHpvb21PdXRUaXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVsdGE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWm9vbVNsaWRlciB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21TbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFpvb21TbGlkZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbVNsaWRlcih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBab29tVG9FeHRlbnQgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXpvb210b2V4dGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Ub0V4dGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogWm9vbVRvRXh0ZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb21Ub0V4dGVudCh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tdG9leHRlbnQnKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTVZUIH0gZnJvbSAnb2wvZm9ybWF0JztcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tJztcclxuaW1wb3J0IEdlb21ldHJ5VHlwZSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1mb3JtYXQtbXZ0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBGb3JtYXRDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1hdE1WVENvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRNVlRDb21wb25lbnQgZXh0ZW5kcyBGb3JtYXRDb21wb25lbnQge1xyXG4gIGluc3RhbmNlOiBNVlQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZUNsYXNzOlxyXG4gICAgfCAoKGdlb206IEdlb21ldHJ5IHwgeyBbazogc3RyaW5nXTogYW55IH0pID0+IGFueSlcclxuICAgIHwgKChnZW9tOiBHZW9tZXRyeVR5cGUsIGFyZzI6IG51bWJlcltdLCBhcmczOiBudW1iZXJbXSB8IG51bWJlcltdW10sIGFyZzQ6IHsgW2s6IHN0cmluZ106IGFueSB9KSA9PiBhbnkpO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllck5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTVZUKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRzLCBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kZWZhdWx0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248SW50ZXJhY3Rpb24+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cygpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGkgPT4gdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24oaSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goaSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbihpKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvdWJsZUNsaWNrWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kb3VibGVjbGlja3pvb20nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERvdWJsZUNsaWNrWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEb3VibGVDbGlja1pvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGRlbHRhOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEb3VibGVDbGlja1pvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdBbmREcm9wIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ2FuZGRyb3AnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYWdBbmREcm9wO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdENvbnN0cnVjdG9yczogKChuOiBGZWF0dXJlKSA9PiBhbnkpW107XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldDogRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnQm94IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcbmltcG9ydCB7IEVuZENvbmRpdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYWdCb3gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ2JveCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0JveEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnQm94O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBib3hFbmRDb25kaXRpb246IEVuZENvbmRpdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdCb3godGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdQYW4gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBLaW5ldGljIGZyb20gJ29sL0tpbmV0aWMnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFncGFuJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnUGFuSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IERyYWdQYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBraW5ldGljOiBLaW5ldGljO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1Bhbih0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ1JvdGF0ZSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ3JvdGF0ZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1JvdGF0ZUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmFnUm90YXRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdSb3RhdGUodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdSb3RhdGVBbmRab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFncm90YXRlYW5kem9vbScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1JvdGF0ZUFuZFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ1JvdGF0ZUFuZFpvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1JvdGF0ZUFuZFpvb20odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnem9vbScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhZ1pvb207XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb246IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBvdXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnWm9vbSh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW91c2VXaGVlbFpvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tbW91c2V3aGVlbHpvb20nLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE1vdXNlV2hlZWxab29tO1xyXG4gIEBJbnB1dCgpXHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHRpbWVvdXQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHVzZUFuY2hvcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vdXNlV2hlZWxab29tKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaW5jaFpvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tcGluY2h6b29tJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaW5jaFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogUGluY2hab29tO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjb25zdHJhaW5SZXNvbHV0aW9uOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUGluY2hab29tKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyYXcgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgRHJhd0V2ZW50LCBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdyc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhdycsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd0ludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmF3O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsaWNrVG9sZXJhbmNlPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc291cmNlPzogVmVjdG9yO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6IEdlb21ldHJ5VHlwZTtcclxuICBASW5wdXQoKVxyXG4gIG1heFBvaW50cz86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblBvaW50cz86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGZpbmlzaENvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBmcmVlaGFuZD86IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYXcodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25DaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd2VuZCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uRHJhd0VuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkRyYXdTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBTZWxlY3RFdmVudCwgRmlsdGVyRnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IFNlbGVjdDtcclxuXHJcbiAgQElucHV0KClcclxuICBhZGRDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBsYXllcnM/OiBMYXllcltdIHwgKChsYXllcjogTGF5ZXIpID0+IGJvb2xlYW4pO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVtb3ZlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdG9nZ2xlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgbXVsdGk/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgZmlsdGVyPzogRmlsdGVyRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTZWxlY3QodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZWxlY3QnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kaWZ5IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTW9kaWZ5RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9Nb2RpZnknO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vZGlmeScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE1vZGlmeTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBkZWxldGVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzOiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc291cmNlPzogVmVjdG9yO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbk1vZGlmeUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Nb2RpZnlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vZGlmeSh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25DaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25DaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5ZW5kJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbk1vZGlmeUVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnlzdGFydCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25Nb2RpZnlTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1RyYW5zbGF0ZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tdHJhbnNsYXRlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogVHJhbnNsYXRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcclxuICBASW5wdXQoKVxyXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XHJcbiAgQElucHV0KClcclxuICBoaXRUb2xlcmFuY2U/OiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25UcmFuc2xhdGVFbmQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25UcmFuc2xhdGVTdGFydDogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0aW5nOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uVHJhbnNsYXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uVHJhbnNsYXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRyYW5zbGF0ZSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RyYW5zbGF0ZWVuZCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlc3RhcnQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRlU3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRpbmcnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRpbmcuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9uJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBBdHRyaWJ1dGlvbjtcclxuICBodG1sOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F0dHJpYnV0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbnMnLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBpbnN0YW5jZTogQXJyYXk8QXR0cmlidXRpb24+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEF0dHJpYnV0aW9uQ29tcG9uZW50KVxyXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU291cmNlQ29tcG9uZW50KSB7fVxyXG5cclxuICAvKiB3ZSBjYW4gZG8gdGhpcyBhdCB0aGUgdmVyeSBlbmQgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmF0dHJpYnV0aW9ucy5tYXAoY21wID0+IGNtcC5pbnN0YW5jZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIGF0dHJpYnV0aW9uczonLCB0aGlzLmluc3RhbmNlKTtcclxuICAgICAgdGhpcy5zb3VyY2UuaW5zdGFuY2Uuc2V0QXR0cmlidXRpb25zKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVVEZHcmlkIH0gZnJvbSAnb2wvc291cmNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS11dGZncmlkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVVURkdyaWRDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVVRGR3JpZENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IFVURkdyaWQ7XHJcbiAgQElucHV0KCkgdGlsZUpTT046IEpTT047XHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVURkdyaWQodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0FmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvamVjdGlvbkxpa2V9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHtVcmxGdW5jdGlvbn0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgc3R5bGVmdW5jdGlvbiBmcm9tICdvbC1tYXBib3gtc3R5bGUvc3R5bGVmdW5jdGlvbic7XG5pbXBvcnQge2FwcGx5U3R5bGUsIGFwcGx5QmFja2dyb3VuZH0gZnJvbSAnb2wtbWFwYm94LXN0eWxlJztcbmltcG9ydCB7U291cmNlQ29tcG9uZW50fSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHtMYXllclZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7U291cmNlVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi92ZWN0b3J0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1tYXBib3gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudCl9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBzdHlsZVVybDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNvdXJjZU5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKSBzcHJpdGVKc29uVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc3ByaXRlVXJsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdHlsZUxvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3ByaXRlSnNvbkxvYWRlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZ2xTdHlsZSA9IHt9O1xuXG4gIHByaXZhdGUgc3ByaXRlRGF0YSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCwgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG5cbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc3R5bGVVcmwpLnN1YnNjcmliZShzdHlsZU9iamVjdCA9PiB7XG4gICAgICB0aGlzLmdsU3R5bGUgPSBzdHlsZU9iamVjdDtcbiAgICAgIHRoaXMuc3R5bGVMb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5hcHBseU1hcGJveFN0eWxlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc3ByaXRlSnNvblVybCkuc3Vic2NyaWJlKHNwcml0ZURhdGEgPT4ge1xuICAgICAgdGhpcy5zcHJpdGVEYXRhID0gc3ByaXRlRGF0YTtcbiAgICAgIHRoaXMuc3ByaXRlSnNvbkxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFwcGx5TWFwYm94U3R5bGUoKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgYXBwbHlNYXBib3hTdHlsZSgpIHtcbiAgICAvLyBzZXQgdGhlIG1hcGJveCBzdHlsZVxuICAgIGlmICh0aGlzLnNwcml0ZUpzb25Mb2FkZWQgJiYgdGhpcy5zdHlsZUxvYWRlZCkge1xuICAgICAgc3R5bGVmdW5jdGlvbih0aGlzLmhvc3QuaW5zdGFuY2UsIHRoaXMuZ2xTdHlsZSwgdGhpcy5zb3VyY2VOYW1lLCB1bmRlZmluZWQsIHRoaXMuc3ByaXRlRGF0YSwgdGhpcy5zcHJpdGVVcmwpO1xuICAgICAgYXBwbHlCYWNrZ3JvdW5kKHRoaXMubWFwLmluc3RhbmNlLCB0aGlzLmdsU3R5bGUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKlxyXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2Ygbmd4LW9wZW5sYXllcnNcclxuICovXHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtWaWV3Q29tcG9uZW50fSBmcm9tICcuL2xpYi92aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R3JhdGljdWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9ncmF0aWN1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllckdyb3VwQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVySW1hZ2VDb21wb25lbnR9IGZyb20gJy4vbGliL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJUaWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tICcuL2xpYi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtMYXllclZlY3RvckNvbXBvbmVudH0gZnJvbSAnLi9saWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlT3NtQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL29zbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZUJpbmdtYXBzQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL2JpbmdtYXBzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlQ2x1c3RlckNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9jbHVzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlVmVjdG9yQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVhZWkNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy94eXouY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VUaWxlV01UU0NvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy90aWxld210cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdmVjdG9ydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVRpbGVXTVNDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvdGlsZXdtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZVRpbGVKU09OQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3RpbGVqc29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlR2VvSlNPTkNvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9nZW9qc29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvaW1hZ2VzdGF0aWMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VJbWFnZVdNU0NvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9pbWFnZXdtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudH0gZnJvbSAnLi9saWIvc291cmNlcy9pbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VSYXN0ZXJDb21wb25lbnR9IGZyb20gJy4vbGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmVhdHVyZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dlb21ldHJ5Q2lyY2xlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0dlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlQb2ludENvbXBvbmVudH0gZnJvbSAnLi9saWIvZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nvb3JkaW5hdGVDb21wb25lbnR9IGZyb20gJy4vbGliL2Nvb3JkaW5hdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvc3R5bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdHlsZUNpcmNsZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvc3R5bGVzL2NpcmNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlU3Ryb2tlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvc3Ryb2tlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVJY29uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0eWxlRmlsbENvbXBvbmVudH0gZnJvbSAnLi9saWIvc3R5bGVzL2ZpbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdHlsZVRleHRDb21wb25lbnR9IGZyb20gJy4vbGliL3N0eWxlcy90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGVmYXVsdENvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL2RlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbEF0dHJpYnV0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xGdWxsU2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250cm9scy9mdWxsc2NyZWVuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL21vdXNlcG9zaXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sT3ZlcnZpZXdNYXBDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFJvdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvcm90YXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFNjYWxlTGluZUNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvc2NhbGVsaW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udHJvbFpvb21Db21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL3pvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudH0gZnJvbSAnLi9saWIvY29udHJvbHMvem9vbXNsaWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRyb2xab29tVG9FeHRlbnRDb21wb25lbnR9IGZyb20gJy4vbGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1hdE1WVENvbXBvbmVudH0gZnJvbSAnLi9saWIvZm9ybWF0cy9tdnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaWxlR3JpZENvbXBvbmVudH0gZnJvbSAnLi9saWIvdGlsZWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaWxlR3JpZFdNVFNDb21wb25lbnR9IGZyb20gJy4vbGliL3RpbGVncmlkd210cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHtEb3VibGVDbGlja1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RvdWJsZWNsaWNrem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFnYW5kZHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdCb3hJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL2RyYWdib3guY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnUGFuSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFncGFuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhZ1JvdGF0ZUludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3JvdGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdSb3RhdGVBbmRab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFncm90YXRlYW5kem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9kcmFnem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9tb3VzZXdoZWVsem9vbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BpbmNoWm9vbUludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvcGluY2h6b29tLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJhd0ludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlbGVjdEludGVyYWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL2xpYi9pbnRlcmFjdGlvbnMvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbGliL2ludGVyYWN0aW9ucy9tb2RpZnkuY29tcG9uZW50JztcclxuaW1wb3J0IHtUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvaW50ZXJhY3Rpb25zL3RyYW5zbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge092ZXJsYXlDb21wb25lbnR9IGZyb20gJy4vbGliL292ZXJsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL2xpYi9jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXR0cmlidXRpb25zQ29tcG9uZW50fSBmcm9tICcuL2xpYi9hdHRyaWJ1dGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBdHRyaWJ1dGlvbkNvbXBvbmVudH0gZnJvbSAnLi9saWIvYXR0cmlidXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VVVEZHcmlkQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3V0ZmdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuL2xpYi9zb3VyY2VzL3NvdXJjZS1tYXBib3gtdmVjdG9yLXRpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE1hcENvbXBvbmVudCxcclxuICBWaWV3Q29tcG9uZW50LFxyXG4gIEdyYXRpY3VsZUNvbXBvbmVudCxcclxuICBMYXllckdyb3VwQ29tcG9uZW50LFxyXG4gIExheWVySW1hZ2VDb21wb25lbnQsXHJcbiAgTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuICBTb3VyY2VPc21Db21wb25lbnQsXHJcbiAgU291cmNlQmluZ21hcHNDb21wb25lbnQsXHJcbiAgU291cmNlQ2x1c3RlckNvbXBvbmVudCxcclxuICBTb3VyY2VVVEZHcmlkQ29tcG9uZW50LFxyXG4gIFNvdXJjZVZlY3RvckNvbXBvbmVudCxcclxuICBTb3VyY2VYWVpDb21wb25lbnQsXHJcbiAgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlV01TQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50LFxyXG4gIFNvdXJjZVRpbGVKU09OQ29tcG9uZW50LFxyXG4gIFNvdXJjZUdlb0pTT05Db21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQsXHJcbiAgU291cmNlSW1hZ2VXTVNDb21wb25lbnQsXHJcbiAgU291cmNlUmFzdGVyQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCxcclxuICBGZWF0dXJlQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcclxuICBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQsXHJcbiAgR2VvbWV0cnlQb2ludENvbXBvbmVudCxcclxuICBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXHJcbiAgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsXHJcbiAgQ29vcmRpbmF0ZUNvbXBvbmVudCxcclxuICBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQsXHJcbiAgU3R5bGVDb21wb25lbnQsXHJcbiAgU3R5bGVDaXJjbGVDb21wb25lbnQsXHJcbiAgU3R5bGVGaWxsQ29tcG9uZW50LFxyXG4gIFN0eWxlSWNvbkNvbXBvbmVudCxcclxuICBTdHlsZVN0cm9rZUNvbXBvbmVudCxcclxuICBTdHlsZVRleHRDb21wb25lbnQsXHJcbiAgRGVmYXVsdENvbnRyb2xDb21wb25lbnQsXHJcbiAgQ29udHJvbENvbXBvbmVudCxcclxuICBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50LFxyXG4gIENvbnRyb2xSb3RhdGVDb21wb25lbnQsXHJcbiAgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50LFxyXG4gIEZvcm1hdE1WVENvbXBvbmVudCxcclxuICBUaWxlR3JpZENvbXBvbmVudCxcclxuICBUaWxlR3JpZFdNVFNDb21wb25lbnQsXHJcbiAgRGVmYXVsdEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERvdWJsZUNsaWNrWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ0JveEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdQYW5JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnUm90YXRlSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1JvdGF0ZUFuZFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIE1vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgUGluY2hab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhd0ludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIFNlbGVjdEludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIE1vZGlmeUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIFRyYW5zbGF0ZUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIE92ZXJsYXlDb21wb25lbnQsXHJcbiAgQ29udGVudENvbXBvbmVudCxcclxuICBBdHRyaWJ1dGlvbnNDb21wb25lbnQsXHJcbiAgQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudFxyXG59O1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBNYXBDb21wb25lbnQsXHJcblxyXG4gIFZpZXdDb21wb25lbnQsXHJcbiAgR3JhdGljdWxlQ29tcG9uZW50LFxyXG5cclxuICBMYXllckdyb3VwQ29tcG9uZW50LFxyXG4gIExheWVySW1hZ2VDb21wb25lbnQsXHJcbiAgTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yQ29tcG9uZW50LFxyXG4gIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCxcclxuXHJcbiAgU291cmNlT3NtQ29tcG9uZW50LFxyXG4gIFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50LFxyXG4gIFNvdXJjZUNsdXN0ZXJDb21wb25lbnQsXHJcbiAgU291cmNlVVRGR3JpZENvbXBvbmVudCxcclxuICBTb3VyY2VWZWN0b3JDb21wb25lbnQsXHJcbiAgU291cmNlWFlaQ29tcG9uZW50LFxyXG4gIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQsXHJcbiAgU291cmNlVGlsZVdNU0NvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCxcclxuICBTb3VyY2VUaWxlSlNPTkNvbXBvbmVudCxcclxuICBTb3VyY2VHZW9KU09OQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlV01TQ29tcG9uZW50LFxyXG4gIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCxcclxuICBTb3VyY2VSYXN0ZXJDb21wb25lbnQsXHJcbiAgRmVhdHVyZUNvbXBvbmVudCxcclxuICBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50LFxyXG4gIEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5UG9pbnRDb21wb25lbnQsXHJcbiAgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50LFxyXG4gIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50LFxyXG4gIENvb3JkaW5hdGVDb21wb25lbnQsXHJcbiAgQ29sbGVjdGlvbkNvb3JkaW5hdGVzQ29tcG9uZW50LFxyXG5cclxuICBTdHlsZUNvbXBvbmVudCxcclxuICBTdHlsZUNpcmNsZUNvbXBvbmVudCxcclxuICBTdHlsZUZpbGxDb21wb25lbnQsXHJcbiAgU3R5bGVJY29uQ29tcG9uZW50LFxyXG4gIFN0eWxlU3Ryb2tlQ29tcG9uZW50LFxyXG4gIFN0eWxlVGV4dENvbXBvbmVudCxcclxuXHJcbiAgRGVmYXVsdENvbnRyb2xDb21wb25lbnQsXHJcbiAgQ29udHJvbENvbXBvbmVudCxcclxuICBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQsXHJcbiAgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQsXHJcbiAgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50LFxyXG4gIENvbnRyb2xSb3RhdGVDb21wb25lbnQsXHJcbiAgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbUNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudCxcclxuICBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50LFxyXG5cclxuICBGb3JtYXRNVlRDb21wb25lbnQsXHJcbiAgVGlsZUdyaWRDb21wb25lbnQsXHJcbiAgVGlsZUdyaWRXTVRTQ29tcG9uZW50LFxyXG5cclxuICBEZWZhdWx0SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRG91YmxlQ2xpY2tab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ0FuZERyb3BJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnQm94SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgRHJhZ1BhbkludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdSb3RhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmFnUm90YXRlQW5kWm9vbUludGVyYWN0aW9uQ29tcG9uZW50LFxyXG4gIERyYWdab29tSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgTW91c2VXaGVlbFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBQaW5jaFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCxcclxuICBEcmF3SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQsXHJcbiAgVHJhbnNsYXRlSW50ZXJhY3Rpb25Db21wb25lbnQsXHJcblxyXG4gIE92ZXJsYXlDb21wb25lbnQsXHJcbiAgQ29udGVudENvbXBvbmVudCxcclxuICBBdHRyaWJ1dGlvbnNDb21wb25lbnQsXHJcbiAgQXR0cmlidXRpb25Db21wb25lbnQsXHJcbiAgU291cmNlTWFwYm94VmVjdG9yVGlsZUNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXHJcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJPcGVubGF5ZXJzTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsiVmVjdG9yIiwiV01UUyIsIlZlY3RvclRpbGUiLCJDaXJjbGUiLCJkZWZhdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQTBCYSxZQUFZOzs7O0lBOEN2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBNUM3QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUc3QixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBRWYsV0FBTSxHQUFHLE1BQU0sQ0FBQzs7UUFvQ2hCLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3BELElBQUks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