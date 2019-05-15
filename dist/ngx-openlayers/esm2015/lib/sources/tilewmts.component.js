/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef, ContentChild, } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS } from 'ol/source';
import { WMTS as TileGridWMTS } from 'ol/tilegrid';
import { ProjectionLike } from 'ol/proj';
import { LoadFunction } from 'ol/Tile';
export class SourceTileWMTSComponent extends SourceComponent {
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
        this.instance = new WMTS(this);
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
if (false) {
    /** @type {?} */
    SourceTileWMTSComponent.prototype.instance;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.cacheSize;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileGrid;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.projection;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.requestEncoding;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.layer;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.style;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileClass;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tilePixelRatio;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.version;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.format;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.matrixSet;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.dimensions;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.url;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.urls;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.wrapX;
    /** @type {?} */
    SourceTileWMTSComponent.prototype.tileGridWMTS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90aWxld210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFDTCxVQUFVLEVBRVYsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLElBQUksWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVN2QyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZUFBZTs7OztJQTBDMUQsWUFBb0IsS0FBeUI7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7O2NBQzFCLFVBQVUsR0FBNkIsRUFBRTtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssS0FBSzt3QkFDUixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDdEIsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBQyxFQUFFLENBQUM7YUFDbEc7Ozs7WUFmUSxrQkFBa0IsdUJBMERaLElBQUk7Ozt3QkF4Q2hCLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO3lCQUVMLEtBQUs7eUNBRUwsS0FBSzs4QkFFTCxLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSzt3QkFFTCxLQUFLOzZCQUVMLEtBQUs7c0JBRUwsS0FBSztxQkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBRUwsS0FBSztrQkFFTCxLQUFLOytCQUVMLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLOzJCQUdMLFlBQVksU0FBQyxxQkFBcUI7Ozs7SUF0Q25DLDJDQUFlOztJQUNmLDRDQUNtQjs7SUFDbkIsOENBQ3FCOztJQUNyQiwyQ0FDdUI7O0lBQ3ZCLDZDQUMyQjs7SUFDM0IsNkRBQ29DOztJQUNwQyxrREFDK0M7O0lBQy9DLHdDQUNjOztJQUNkLHdDQUNjOztJQUNkLDRDQUNnQjs7SUFDaEIsaURBQ3dCOztJQUN4QiwwQ0FDaUI7O0lBQ2pCLHlDQUNnQjs7SUFDaEIsNENBQ2tCOztJQUNsQiw2Q0FDb0I7O0lBQ3BCLHNDQUNhOztJQUNiLG1EQUNnQzs7SUFDaEMsdUNBQ2dCOztJQUNoQix3Q0FDZ0I7O0lBRWhCLCtDQUNvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlR3JpZFdNVFNDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZHdtdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV01UUyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFdNVFMgYXMgVGlsZUdyaWRXTVRTIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgeyBXTVRTUmVxdWVzdEVuY29kaW5nIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtdHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNVFNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNVFNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBXTVRTO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aWxlR3JpZDogVGlsZUdyaWRXTVRTO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZD86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlcXVlc3RFbmNvZGluZz86IFdNVFNSZXF1ZXN0RW5jb2RpbmcgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVDbGFzcz86IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVyc2lvbj86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGZvcm1hdD86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hdHJpeFNldDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGltZW5zaW9ucz86IE9iamVjdDtcclxuICBASW5wdXQoKVxyXG4gIHVybD86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICB1cmxzPzogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRXTVRTQ29tcG9uZW50KVxyXG4gIHRpbGVHcmlkV01UUzogVGlsZUdyaWRXTVRTQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICBjYXNlICd1cmwnOlxyXG4gICAgICAgICAgICB0aGlzLnVybCA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHNldExheWVyU291cmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRpbGVHcmlkV01UUykge1xyXG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFdNVFMuaW5zdGFuY2U7XHJcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19