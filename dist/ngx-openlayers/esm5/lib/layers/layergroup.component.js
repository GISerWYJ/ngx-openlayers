/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, SkipSelf, Optional } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
var LayerGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LayerGroupComponent, _super);
    function LayerGroupComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    /**
     * @return {?}
     */
    LayerGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-layer-group',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerGroupComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
    ]; };
    return LayerGroupComponent;
}(LayerComponent));
export { LayerGroupComponent };
if (false) {
    /** @type {?} */
    LayerGroupComponent.prototype.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQU15QywrQ0FBYztJQUdyRCw2QkFDRSxHQUFpQixFQUdqQixLQUEyQjtlQUUzQixrQkFBTSxLQUFLLElBQUksR0FBRyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFQUSxZQUFZO2dCQWVULG1CQUFtQix1QkFGMUIsUUFBUSxZQUNSLFFBQVE7O0lBV2IsMEJBQUM7Q0FBQSxBQXZCRCxDQU15QyxjQUFjLEdBaUJ0RDtTQWpCWSxtQkFBbUI7OztJQUM5Qix1Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXllckdyb3VwQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBtYXA6IE1hcENvbXBvbmVudCxcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgb2wubGF5ZXIuR3JvdXAgaW5zdGFuY2Ugd2l0aDpgLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JvdXAodGhpcyk7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=