/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export class LayerVectorTileComponent extends LayerComponent {
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
if (false) {
    /** @type {?} */
    LayerVectorTileComponent.prototype.renderBuffer;
    /** @type {?} */
    LayerVectorTileComponent.prototype.renderMode;
    /** @type {?} */
    LayerVectorTileComponent.prototype.renderOrder;
    /** @type {?} */
    LayerVectorTileComponent.prototype.style;
    /** @type {?} */
    LayerVectorTileComponent.prototype.updateWhileAnimating;
    /** @type {?} */
    LayerVectorTileComponent.prototype.updateWhileInteracting;
    /** @type {?} */
    LayerVectorTileComponent.prototype.visible;
    /** @type {?} */
    LayerVectorTileComponent.prototype.declutter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBRSxRQUFRLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFJcEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQVMzRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7SUFtQjFELFlBQVksR0FBaUIsRUFBYyxLQUEyQjtRQUNwRSxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7OztZQVZPLFlBQVk7WUFFWixtQkFBbUIsdUJBNEJPLFFBQVE7OzsyQkFsQnZDLEtBQUs7eUJBRUwsS0FBSzswQkFHTCxLQUFLO29CQUVMLEtBQUs7bUNBRUwsS0FBSztxQ0FFTCxLQUFLO3NCQUVMLEtBQUs7d0JBRUwsS0FBSzs7OztJQWZOLGdEQUNxQjs7SUFDckIsOENBQ2dDOztJQUVoQywrQ0FDOEQ7O0lBQzlELHlDQUN1Qzs7SUFDdkMsd0RBQzhCOztJQUM5QiwwREFDZ0M7O0lBQ2hDLDJDQUNpQjs7SUFDakIsNkNBQ21CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1ZlY3RvclRpbGV9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHtSZW5kZXJUeXBlfSBmcm9tICdvbC9sYXllci9WZWN0b3JUaWxlJztcclxuaW1wb3J0IHtGZWF0dXJlfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7U3R5bGV9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xheWVyQ29tcG9uZW50fSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGF5ZXJHcm91cENvbXBvbmVudH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3R5bGVGdW5jdGlvbn0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItdmVjdG9ydGlsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICByZW5kZXJCdWZmZXI6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlbmRlck1vZGU6IFJlbmRlclR5cGUgfCBzdHJpbmc7XHJcbiAgLyogbm90IG1hcmtlZCBhcyBvcHRpb25hbCBpbiB0aGUgdHlwaW5ncyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyT3JkZXI6IChmZWF0dXJlMTogRmVhdHVyZSwgZmVhdHVyZTI6IEZlYXR1cmUpID0+IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB1cGRhdGVXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGRlY2x1dHRlcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlZlY3RvclRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yVGlsZSh0aGlzKTtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIl19