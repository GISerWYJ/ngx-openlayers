/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from '../map.component';
import { Vector } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerVectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LayerVectorComponent, _super);
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
export { LayerVectorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxRQUFRLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RDtJQU0wQyxnREFBYztJQWV0RCw4QkFBWSxHQUFpQixFQUFjLEtBQTJCO2VBQ3BFLGtCQUFNLEtBQUssSUFBSSxHQUFHLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFaUSxZQUFZO2dCQUtaLG1CQUFtQix1QkF1Qk0sUUFBUTs7OytCQVp2QyxLQUFLO3dCQUdMLEtBQUs7dUNBR0wsS0FBSzt5Q0FHTCxLQUFLOztJQWdCUiwyQkFBQztDQUFBLEFBbENELENBTTBDLGNBQWMsR0E0QnZEO1NBNUJZLG9CQUFvQjs7O0lBQy9CLHNDQUFzQjs7SUFFdEIsNENBQ3FCOztJQUVyQixxQ0FDdUM7O0lBRXZDLG9EQUM4Qjs7SUFFOUIsc0RBQ2dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci12ZWN0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgc291cmNlOiBWZWN0b3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc3R5bGU6IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xyXG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlZlY3RvciBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==