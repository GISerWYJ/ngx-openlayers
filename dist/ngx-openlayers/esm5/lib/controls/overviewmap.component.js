/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlOverviewMapComponent = /** @class */ (function () {
    function ControlOverviewMapComponent(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ControlOverviewMapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    /**
     * @return {?}
     */
    ControlOverviewMapComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeControl(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ControlOverviewMapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ControlOverviewMapComponent.prototype.reloadInstance = /**
     * @private
     * @return {?}
     */
    function () {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-control-overviewmap',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    ControlOverviewMapComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ControlOverviewMapComponent.propDecorators = {
        collapsed: [{ type: Input }],
        collapseLabel: [{ type: Input }],
        collapsible: [{ type: Input }],
        label: [{ type: Input }],
        layers: [{ type: Input }],
        target: [{ type: Input }],
        tipLabel: [{ type: Input }],
        view: [{ type: Input }]
    };
    return ControlOverviewMapComponent;
}());
export { ControlOverviewMapComponent };
if (false) {
    /** @type {?} */
    ControlOverviewMapComponent.prototype.instance;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.collapsed;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.collapseLabel;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.collapsible;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.label;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.layers;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.target;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.tipLabel;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ControlOverviewMapComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvb3ZlcnZpZXdtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQztBQUMxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQXlCRSxxQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7SUFFekMsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVPLG9EQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7Ozs7Z0JBUFEsWUFBWTs7OzRCQVVsQixLQUFLO2dDQUVMLEtBQUs7OEJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLO3VCQUVMLEtBQUs7O0lBeUJSLGtDQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0F6Q1ksMkJBQTJCOzs7SUFDdEMsK0NBQXNCOztJQUN0QixnREFDbUI7O0lBQ25CLG9EQUNzQjs7SUFDdEIsa0RBQ3FCOztJQUNyQiw0Q0FDYzs7SUFDZCw2Q0FDZ0I7O0lBQ2hCLDZDQUNnQjs7SUFDaEIsK0NBQ2lCOztJQUNqQiwyQ0FDVzs7Ozs7SUFFQywwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBPdmVydmlld01hcCB9IGZyb20gJ29sL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtb3ZlcnZpZXdtYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdmVydmlld01hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBPdmVydmlld01hcDtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNlTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyczogTGF5ZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHRhcmdldDogRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIHRpcExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB2aWV3OiBWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbCAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCd2aWV3JykpIHtcclxuICAgICAgdGhpcy5yZWxvYWRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWxvYWRJbnN0YW5jZSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19