/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Graticule } from 'ol';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
var GraticuleComponent = /** @class */ (function () {
    function GraticuleComponent(map) {
        this.map = map;
        this.componentType = 'graticule';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    GraticuleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    };
    /**
     * @return {?}
     */
    GraticuleComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-graticule',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    GraticuleComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    GraticuleComponent.propDecorators = {
        strokeStyle: [{ type: Input }],
        showLabels: [{ type: Input }],
        lonLabelPosition: [{ type: Input }],
        latLabelPosition: [{ type: Input }]
    };
    return GraticuleComponent;
}());
export { GraticuleComponent };
if (false) {
    /** @type {?} */
    GraticuleComponent.prototype.instance;
    /** @type {?} */
    GraticuleComponent.prototype.componentType;
    /** @type {?} */
    GraticuleComponent.prototype.strokeStyle;
    /** @type {?} */
    GraticuleComponent.prototype.showLabels;
    /** @type {?} */
    GraticuleComponent.prototype.lonLabelPosition;
    /** @type {?} */
    GraticuleComponent.prototype.latLabelPosition;
    /**
     * @type {?}
     * @private
     */
    GraticuleComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdGljdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dyYXRpY3VsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE4QyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBaUJFLDRCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBWDlCLGtCQUFhLEdBQUcsV0FBVyxDQUFDO0lBV0ssQ0FBQzs7Ozs7SUFFekMsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztZQUMxQixVQUFVLEdBQTZCLEVBQUU7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBRUQsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUM3QztTQUNGO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsK0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBTFEsWUFBWTs7OzhCQVVsQixLQUFLOzZCQUVMLEtBQUs7bUNBRUwsS0FBSzttQ0FFTCxLQUFLOztJQWlDUix5QkFBQztDQUFBLEFBL0NELElBK0NDO1NBM0NZLGtCQUFrQjs7O0lBQzdCLHNDQUFjOztJQUNkLDJDQUFtQzs7SUFFbkMseUNBQ29COztJQUNwQix3Q0FDb0I7O0lBQ3BCLDhDQUN5Qjs7SUFDekIsOENBQ3lCOzs7OztJQUViLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcmF0aWN1bGUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWdyYXRpY3VsZScsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyYXRpY3VsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaW5zdGFuY2U6IGFueTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdncmF0aWN1bGUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHN0cm9rZVN0eWxlOiBTdHJva2U7XHJcbiAgQElucHV0KClcclxuICBzaG93TGFiZWxzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9uTGFiZWxQb3NpdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF0TGFiZWxQb3NpdGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcGVydGllcykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdyYXRpY3VsZShwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0TWFwKHRoaXMubWFwLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JhdGljdWxlKHtcclxuICAgICAgc3Ryb2tlU3R5bGU6IHRoaXMuc3Ryb2tlU3R5bGUsXHJcbiAgICAgIHNob3dMYWJlbHM6IHRoaXMuc2hvd0xhYmVscyxcclxuICAgICAgbG9uTGFiZWxQb3NpdGlvbjogdGhpcy5sb25MYWJlbFBvc2l0aW9uLFxyXG4gICAgICBsYXRMYWJlbFBvc2l0aW9uOiB0aGlzLmxhdExhYmVsUG9zaXRpb24sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0TWFwKHRoaXMubWFwLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19