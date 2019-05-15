/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild, Optional, Output, EventEmitter, } from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceRasterComponent } from './raster.component';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction, UrlFunction } from 'ol/Tile';
var SourceXYZComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceXYZComponent, _super);
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
export { SourceXYZComponent };
if (false) {
    /** @type {?} */
    SourceXYZComponent.prototype.instance;
    /** @type {?} */
    SourceXYZComponent.prototype.cacheSize;
    /** @type {?} */
    SourceXYZComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceXYZComponent.prototype.opaque;
    /** @type {?} */
    SourceXYZComponent.prototype.projection;
    /** @type {?} */
    SourceXYZComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceXYZComponent.prototype.minZoom;
    /** @type {?} */
    SourceXYZComponent.prototype.maxZoom;
    /** @type {?} */
    SourceXYZComponent.prototype.tileGrid;
    /** @type {?} */
    SourceXYZComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceXYZComponent.prototype.tilePixelRatio;
    /** @type {?} */
    SourceXYZComponent.prototype.tileSize;
    /** @type {?} */
    SourceXYZComponent.prototype.tileUrlFunction;
    /** @type {?} */
    SourceXYZComponent.prototype.url;
    /** @type {?} */
    SourceXYZComponent.prototype.urls;
    /** @type {?} */
    SourceXYZComponent.prototype.wrapX;
    /** @type {?} */
    SourceXYZComponent.prototype.tileGridXYZ;
    /** @type {?} */
    SourceXYZComponent.prototype.tileLoadStart;
    /** @type {?} */
    SourceXYZComponent.prototype.tileLoadEnd;
    /** @type {?} */
    SourceXYZComponent.prototype.tileLoadError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMveHl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFFTCxVQUFVLEVBRVYsWUFBWSxFQUVaLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzNELE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBEO0lBT3dDLDhDQUFlO0lBMkNyRCw0QkFHRSxLQUF5QixFQUd6QixNQUE4QjtRQU5oQyxZQVFFLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsU0FDckI7UUFmRCxtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVuRixpQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVqRixtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7SUFXbkYsQ0FBQzs7OztJQUVELCtDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFDRCxJ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QUNqRiwyQ0FDbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkNoYW5nZXMsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWFlaIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVJhc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmFzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24sIFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UteHl6JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVhZWkNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VYWVpDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBYWVo7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvcGFxdWU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluWm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVVcmxGdW5jdGlvbj86IFVybEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmxzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkWFlaOiBUaWxlR3JpZENvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBIb3N0KClcclxuICAgIHJhc3Rlcj86IFNvdXJjZVJhc3RlckNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5ZXIsIHJhc3Rlcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy50aWxlR3JpZFhZWikge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWFlaKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=