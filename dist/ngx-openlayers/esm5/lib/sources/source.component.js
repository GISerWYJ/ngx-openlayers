/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
var SourceComponent = /** @class */ (function () {
    function SourceComponent(host, raster) {
        this.host = host;
        this.raster = raster;
        this.componentType = 'source';
    }
    /**
     * @return {?}
     */
    SourceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
        if (this.raster) {
            this.raster.sources = [];
        }
    };
    /**
     * @protected
     * @param {?} s
     * @return {?}
     */
    SourceComponent.prototype._register = /**
     * @protected
     * @param {?} s
     * @return {?}
     */
    function (s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
        if (this.raster) {
            this.raster.sources = [s];
            this.raster.init();
        }
    };
    SourceComponent.propDecorators = {
        attributions: [{ type: Input }]
    };
    return SourceComponent;
}());
export { SourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUtqRDtJQU9FLHlCQUFzQixJQUFvQixFQUFZLE1BQThCO1FBQTlELFNBQUksR0FBSixJQUFJLENBQWdCO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFMN0Usa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFLdUQsQ0FBQzs7OztJQUV4RixxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsbUNBQVM7Ozs7O0lBQW5CLFVBQW9CLENBQVM7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7K0JBeEJBLEtBQUs7O0lBeUJSLHNCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3QlksZUFBZTs7O0lBQzFCLG1DQUF3Qjs7SUFDeEIsd0NBQWdDOztJQUVoQyx1Q0FDa0I7Ozs7O0lBRU4sK0JBQThCOzs7OztJQUFFLGlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3Jhc3Rlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBTb3VyY2U7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc291cmNlJztcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IExheWVyQ29tcG9uZW50LCBwcm90ZWN0ZWQgcmFzdGVyPzogU291cmNlUmFzdGVyQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5ob3N0Lmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFzdGVyKSB7XHJcbiAgICAgIHRoaXMucmFzdGVyLnNvdXJjZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXIoczogU291cmNlKSB7XHJcbiAgICBpZiAodGhpcy5ob3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2Uocyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFzdGVyKSB7XHJcbiAgICAgIHRoaXMucmFzdGVyLnNvdXJjZXMgPSBbc107XHJcbiAgICAgIHRoaXMucmFzdGVyLmluaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19