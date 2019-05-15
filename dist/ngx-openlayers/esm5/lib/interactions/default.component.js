/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { defaults } from 'ol/interaction';
import { MapComponent } from '../map.component';
var DefaultInteractionComponent = /** @class */ (function () {
    function DefaultInteractionComponent(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    DefaultInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = defaults();
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return _this.map.instance.addInteraction(i); }));
    };
    /**
     * @return {?}
     */
    DefaultInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return _this.map.instance.removeInteraction(i); }));
    };
    DefaultInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-default',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DefaultInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    return DefaultInteractionComponent;
}());
export { DefaultInteractionComponent };
if (false) {
    /** @type {?} */
    DefaultInteractionComponent.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    DefaultInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFPRSxxQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7SUFFekMsOENBQVE7OztJQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsRUFBQyxDQUFDO0lBQ3JFLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBTFEsWUFBWTs7SUFtQnJCLGtDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FiWSwyQkFBMkI7OztJQUN0QywrQ0FBa0M7Ozs7O0lBRXRCLDBDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVmYXVsdHMsIEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRlZmF1bHQnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxJbnRlcmFjdGlvbj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goaSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbihpKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChpID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKGkpKTtcclxuICB9XHJcbn1cclxuIl19