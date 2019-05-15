/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
/**
 * @abstract
 */
var SimpleGeometryComponent = /** @class */ (function () {
    function SimpleGeometryComponent(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    /**
     * @return {?}
     */
    SimpleGeometryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.host.instance.setGeometry(this.instance);
    };
    SimpleGeometryComponent.propDecorators = {
        srid: [{ type: Input }]
    };
    return SimpleGeometryComponent;
}());
export { SimpleGeometryComponent };
if (false) {
    /** @type {?} */
    SimpleGeometryComponent.prototype.instance;
    /** @type {?} */
    SimpleGeometryComponent.prototype.componentType;
    /** @type {?} */
    SimpleGeometryComponent.prototype.srid;
    /**
     * @type {?}
     * @protected
     */
    SimpleGeometryComponent.prototype.map;
    /**
     * @type {?}
     * @protected
     */
    SimpleGeometryComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFLOUM7SUFNRSxpQ0FBc0IsR0FBaUIsRUFBWSxJQUFzQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFKbEUsa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQztJQUltQyxDQUFDOzs7O0lBRTdFLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7dUJBTkEsS0FBSzs7SUFPUiw4QkFBQztDQUFBLEFBWEQsSUFXQztTQVhxQix1QkFBdUI7OztJQUMzQywyQ0FBZ0M7O0lBQ2hDLGdEQUF5Qzs7SUFFekMsdUNBQXNCOzs7OztJQUVWLHNDQUEyQjs7Ozs7SUFBRSx1Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlR2VvbWV0cnk7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc2ltcGxlLWdlb21ldHJ5JztcclxuXHJcbiAgQElucHV0KCkgc3JpZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWFwOiBNYXBDb21wb25lbnQsIHByb3RlY3RlZCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRHZW9tZXRyeSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19