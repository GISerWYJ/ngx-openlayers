/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
export class SourceComponent {
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
if (false) {
    /** @type {?} */
    SourceComponent.prototype.instance;
    /** @type {?} */
    SourceComponent.prototype.componentType;
    /** @type {?} */
    SourceComponent.prototype.attributions;
    /**
     * @type {?}
     * @protected
     */
    SourceComponent.prototype.host;
    /**
     * @type {?}
     * @protected
     */
    SourceComponent.prototype.raster;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUtqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFPMUIsWUFBc0IsSUFBb0IsRUFBWSxNQUE4QjtRQUE5RCxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUFZLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBTDdFLGtCQUFhLEdBQUcsUUFBUSxDQUFDO0lBS3VELENBQUM7Ozs7SUFFeEYsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFUyxTQUFTLENBQUMsQ0FBUztRQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7MkJBeEJBLEtBQUs7Ozs7SUFITixtQ0FBd0I7O0lBQ3hCLHdDQUFnQzs7SUFFaEMsdUNBQ2tCOzs7OztJQUVOLCtCQUE4Qjs7Ozs7SUFBRSxpQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlUmFzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYXN0ZXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU291cmNlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3NvdXJjZSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25zOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBMYXllckNvbXBvbmVudCwgcHJvdGVjdGVkIHJhc3Rlcj86IFNvdXJjZVJhc3RlckNvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5ob3N0ICYmIHRoaXMuaG9zdC5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnJhc3Rlcikge1xyXG4gICAgICB0aGlzLnJhc3Rlci5zb3VyY2VzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3JlZ2lzdGVyKHM6IFNvdXJjZSkge1xyXG4gICAgaWYgKHRoaXMuaG9zdCkge1xyXG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnJhc3Rlcikge1xyXG4gICAgICB0aGlzLnJhc3Rlci5zb3VyY2VzID0gW3NdO1xyXG4gICAgICB0aGlzLnJhc3Rlci5pbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==