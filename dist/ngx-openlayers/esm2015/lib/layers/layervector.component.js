/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from '../map.component';
import { Vector } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export class LayerVectorComponent extends LayerComponent {
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
if (false) {
    /** @type {?} */
    LayerVectorComponent.prototype.source;
    /** @type {?} */
    LayerVectorComponent.prototype.renderBuffer;
    /** @type {?} */
    LayerVectorComponent.prototype.style;
    /** @type {?} */
    LayerVectorComponent.prototype.updateWhileAnimating;
    /** @type {?} */
    LayerVectorComponent.prototype.updateWhileInteracting;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFFBQVEsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUTdELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUFjOzs7OztJQWV0RCxZQUFZLEdBQWlCLEVBQWMsS0FBMkI7UUFDcEUsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFaUSxZQUFZO1lBS1osbUJBQW1CLHVCQXVCTSxRQUFROzs7MkJBWnZDLEtBQUs7b0JBR0wsS0FBSzttQ0FHTCxLQUFLO3FDQUdMLEtBQUs7Ozs7SUFYTixzQ0FBc0I7O0lBRXRCLDRDQUNxQjs7SUFFckIscUNBQ3VDOztJQUV2QyxvREFDOEI7O0lBRTlCLHNEQUNnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItdmVjdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllclZlY3RvckNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHVibGljIHNvdXJjZTogVmVjdG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHVwZGF0ZVdoaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3IgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=