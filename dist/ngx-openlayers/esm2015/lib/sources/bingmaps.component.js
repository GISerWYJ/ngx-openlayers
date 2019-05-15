/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { LoadFunction } from 'ol/Tile';
export class SourceBingmapsComponent extends SourceComponent {
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
if (false) {
    /** @type {?} */
    SourceBingmapsComponent.prototype.instance;
    /** @type {?} */
    SourceBingmapsComponent.prototype.cacheSize;
    /** @type {?} */
    SourceBingmapsComponent.prototype.hidpi;
    /** @type {?} */
    SourceBingmapsComponent.prototype.culture;
    /** @type {?} */
    SourceBingmapsComponent.prototype.key;
    /** @type {?} */
    SourceBingmapsComponent.prototype.imagerySet;
    /** @type {?} */
    SourceBingmapsComponent.prototype.maxZoom;
    /** @type {?} */
    SourceBingmapsComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceBingmapsComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceBingmapsComponent.prototype.wrapX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVN2QyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZUFBZTs7OztJQXNCMUQsWUFBb0IsS0FBeUI7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBWGYsZUFBVSxHQUE4RSxRQUFRLENBQUM7SUFZakcsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUMsRUFBRSxDQUFDO2FBQ2xHOzs7O1lBVFEsa0JBQWtCLHVCQWdDWixJQUFJOzs7d0JBbkJoQixLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSztrQkFFTCxLQUFLO3lCQUVMLEtBQUs7c0JBRUwsS0FBSzt5Q0FFTCxLQUFLOytCQUVMLEtBQUs7b0JBRUwsS0FBSzs7OztJQWxCTiwyQ0FBbUI7O0lBRW5CLDRDQUNrQjs7SUFDbEIsd0NBQ2U7O0lBQ2YsMENBQ2dCOztJQUNoQixzQ0FDWTs7SUFDWiw2Q0FDaUc7O0lBQ2pHLDBDQUNnQjs7SUFDaEIsNkRBQ21DOztJQUNuQyxtREFDK0I7O0lBQy9CLHdDQUNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJpbmdNYXBzIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1iaW5nbWFwcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc291cmNlLWJpbmdtYXBzXCI+PC9kaXY+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlQmluZ21hcHNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlQmluZ21hcHNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBCaW5nTWFwcztcclxuXHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGhpZHBpOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3VsdHVyZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZXJ5U2V0OiAnUm9hZCcgfCAnQWVyaWFsJyB8ICdBZXJpYWxXaXRoTGFiZWxzJyB8ICdjb2xsaW5zQmFydCcgfCAnb3JkbmFuY2VTdXJ2ZXknID0gJ0FlcmlhbCc7XHJcbiAgQElucHV0KClcclxuICBtYXhab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEJpbmdNYXBzKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19