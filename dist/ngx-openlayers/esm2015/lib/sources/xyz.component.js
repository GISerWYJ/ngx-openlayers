/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef, ContentChild, Optional, Output, EventEmitter, } from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceRasterComponent } from './raster.component';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction, UrlFunction } from 'ol/Tile';
export class SourceXYZComponent extends SourceComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMveHl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFVBQVUsRUFFVixZQUFZLEVBRVosUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0QsT0FBTyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFTcEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7Ozs7O0lBMkNyRCxZQUdFLEtBQXlCLEVBR3pCLE1BQThCO1FBRTlCLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFkdkIsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFXbkYsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUMxQixVQUFVLEdBQTZCLEVBQUU7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUM3QztTQUNGO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlOzs7O1FBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7UUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZTs7OztRQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQyxFQUFFLENBQUM7YUFDN0Y7Ozs7WUFmUSxrQkFBa0IsdUJBNER0QixRQUFRLFlBQ1IsSUFBSTtZQTFEQSxxQkFBcUIsdUJBNER6QixRQUFRLFlBQ1IsSUFBSTs7O3dCQTlDTixLQUFLOzBCQUVMLEtBQUs7cUJBRUwsS0FBSzt5QkFFTCxLQUFLO3lDQUVMLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7K0JBRUwsS0FBSzs2QkFFTCxLQUFLO3VCQUVMLEtBQUs7OEJBRUwsS0FBSztrQkFFTCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSzswQkFHTCxZQUFZLFNBQUMsaUJBQWlCOzRCQUc5QixNQUFNOzBCQUVOLE1BQU07NEJBRU4sTUFBTTs7OztJQXZDUCxzQ0FBYzs7SUFDZCx1Q0FDa0I7O0lBQ2xCLHlDQUNvQjs7SUFDcEIsb0NBQ2dCOztJQUNoQix3Q0FDbUI7O0lBQ25CLHdEQUNtQzs7SUFDbkMscUNBQ2dCOztJQUNoQixxQ0FDZ0I7O0lBQ2hCLHNDQUNtQjs7SUFDbkIsOENBQ2dDOztJQUNoQyw0Q0FDdUI7O0lBQ3ZCLHNDQUN3Qjs7SUFDeEIsNkNBQzhCOztJQUM5QixpQ0FDWTs7SUFDWixrQ0FDZTs7SUFDZixtQ0FDZTs7SUFFZix5Q0FDK0I7O0lBRS9CLDJDQUNtRjs7SUFDbkYseUNBQ2lGOztJQUNqRiwyQ0FDbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkNoYW5nZXMsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWFlaIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZVJhc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmFzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24sIFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UteHl6JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVhZWkNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VYWVpDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBYWVo7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvcGFxdWU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluWm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVVcmxGdW5jdGlvbj86IFVybEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmxzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkWFlaOiBUaWxlR3JpZENvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBIb3N0KClcclxuICAgIHJhc3Rlcj86IFNvdXJjZVJhc3RlckNvbXBvbmVudFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5ZXIsIHJhc3Rlcik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy50aWxlR3JpZFhZWikge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWFlaKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=