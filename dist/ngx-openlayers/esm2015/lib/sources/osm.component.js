/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, forwardRef, Input, Optional, Output, EventEmitter } from '@angular/core';
import { OSM } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { SourceRasterComponent } from './raster.component';
import { LoadFunction } from 'ol/Tile';
import { AttributionLike } from 'ol/source/Source';
export class SourceOsmComponent extends SourceXYZComponent {
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
if (false) {
    /** @type {?} */
    SourceOsmComponent.prototype.instance;
    /** @type {?} */
    SourceOsmComponent.prototype.attributions;
    /** @type {?} */
    SourceOsmComponent.prototype.cacheSize;
    /** @type {?} */
    SourceOsmComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceOsmComponent.prototype.maxZoom;
    /** @type {?} */
    SourceOsmComponent.prototype.opaque;
    /** @type {?} */
    SourceOsmComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceOsmComponent.prototype.url;
    /** @type {?} */
    SourceOsmComponent.prototype.wrapX;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadStart;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadEnd;
    /** @type {?} */
    SourceOsmComponent.prototype.tileLoadError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvb3NtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0IsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFVbkQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjs7Ozs7SUE2QnhELFlBR0UsS0FBeUIsRUFHekIsTUFBOEI7UUFFOUIsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQWR2QixrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVuRixnQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVqRixrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQVduRixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlOzs7O1FBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7UUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZTs7OztRQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQyxFQUFFLENBQUM7YUFDN0Y7Ozs7WUFkUSxrQkFBa0IsdUJBNkN0QixJQUFJLFlBQ0osUUFBUTtZQTNDSixxQkFBcUIsdUJBNkN6QixJQUFJLFlBQ0osUUFBUTs7OzJCQS9CVixLQUFLO3dCQUVMLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLO3FCQUVMLEtBQUs7eUNBRUwsS0FBSzsrQkFFTCxLQUFLO2tCQUVMLEtBQUs7b0JBRUwsS0FBSzs0QkFHTCxNQUFNOzBCQUVOLE1BQU07NEJBRU4sTUFBTTs7OztJQXpCUCxzQ0FBYzs7SUFFZCwwQ0FDOEI7O0lBQzlCLHVDQUNrQjs7SUFDbEIseUNBQ29COztJQUNwQixxQ0FDZ0I7O0lBQ2hCLG9DQUNnQjs7SUFDaEIsd0RBQ21DOztJQUNuQyw4Q0FDK0I7O0lBQy9CLGlDQUNZOztJQUNaLG1DQUNlOztJQUVmLDJDQUNtRjs7SUFDbkYseUNBQ2lGOztJQUNqRiwyQ0FDbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIGZvcndhcmRSZWYsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBPcHRpb25hbCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT1NNIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VYWVpDb21wb25lbnQgfSBmcm9tICcuL3h5ei5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XHJcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1vc20nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXNvdXJjZS1vc21cIj48L2Rpdj5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VPc21Db21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlT3NtQ29tcG9uZW50IGV4dGVuZHMgU291cmNlWFlaQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW5zdGFuY2U6IE9TTTtcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1heFpvb206IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG9wYXF1ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KClcclxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHRpbGVMb2FkRXJyb3I6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKVxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQsXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcmFzdGVyPzogU291cmNlUmFzdGVyQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXllciwgcmFzdGVyKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnRpbGVHcmlkWFlaKSB7XHJcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT1NNKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==