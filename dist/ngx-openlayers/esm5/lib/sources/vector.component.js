/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import Feature from 'ol/format/Feature';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector';
var SourceVectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceVectorComponent, _super);
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
        this.instance = new Vector(this);
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
export { SourceVectorComponent };
if (false) {
    /** @type {?} */
    SourceVectorComponent.prototype.instance;
    /** @type {?} */
    SourceVectorComponent.prototype.overlaps;
    /** @type {?} */
    SourceVectorComponent.prototype.useSpatialIndex;
    /** @type {?} */
    SourceVectorComponent.prototype.wrapX;
    /** @type {?} */
    SourceVectorComponent.prototype.url;
    /** @type {?} */
    SourceVectorComponent.prototype.format;
    /** @type {?} */
    SourceVectorComponent.prototype.strategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5EO0lBTzJDLGlEQUFlO0lBZXhELCtCQUFvQixLQUEyQjtlQUM3QyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHFDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQyxFQUFFLENBQUM7aUJBQ2hHOzs7O2dCQVZRLG9CQUFvQix1QkEwQmQsSUFBSTs7OzJCQWJoQixLQUFLO2tDQUVMLEtBQUs7d0JBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzs7SUFXUiw0QkFBQztDQUFBLEFBOUJELENBTzJDLGVBQWUsR0F1QnpEO1NBdkJZLHFCQUFxQjs7O0lBQ2hDLHlDQUFpQjs7SUFDakIseUNBQ2tCOztJQUNsQixnREFDeUI7O0lBQ3pCLHNDQUNlOztJQUNmLG9DQUNZOztJQUNaLHVDQUNnQjs7SUFDaEIseUNBQzBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcclxuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvckNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBWZWN0b3I7XHJcbiAgQElucHV0KClcclxuICBvdmVybGFwczogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHVzZVNwYXRpYWxJbmRleDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBmb3JtYXQ6IEZlYXR1cmU7XHJcbiAgQElucHV0KClcclxuICBzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3Rvcih0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==