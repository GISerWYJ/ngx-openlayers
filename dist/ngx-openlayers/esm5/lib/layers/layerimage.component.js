/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
var LayerImageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LayerImageComponent, _super);
    function LayerImageComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    /**
     * @return {?}
     */
    LayerImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new Image(this);
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LayerImageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-layer-image',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    LayerImageComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    LayerImageComponent.propDecorators = {
        opacity: [{ type: Input }],
        visible: [{ type: Input }],
        extent: [{ type: Input }],
        minResolution: [{ type: Input }],
        maxResolution: [{ type: Input }],
        zIndex: [{ type: Input }]
    };
    return LayerImageComponent;
}(LayerComponent));
export { LayerImageComponent };
if (false) {
    /** @type {?} */
    LayerImageComponent.prototype.source;
    /** @type {?} */
    LayerImageComponent.prototype.opacity;
    /** @type {?} */
    LayerImageComponent.prototype.visible;
    /** @type {?} */
    LayerImageComponent.prototype.extent;
    /** @type {?} */
    LayerImageComponent.prototype.minResolution;
    /** @type {?} */
    LayerImageComponent.prototype.maxResolution;
    /** @type {?} */
    LayerImageComponent.prototype.zIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQztJQU15QywrQ0FBYztJQWdCckQsNkJBQVksR0FBaUIsRUFBYyxLQUEyQjtlQUNwRSxrQkFBTSxLQUFLLElBQUksR0FBRyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFWUSxZQUFZO2dCQUVaLG1CQUFtQix1QkF5Qk0sUUFBUTs7OzBCQWJ2QyxLQUFLOzBCQUVMLEtBQUs7eUJBRUwsS0FBSztnQ0FFTCxLQUFLO2dDQUVMLEtBQUs7eUJBRUwsS0FBSzs7SUFlUiwwQkFBQztDQUFBLEFBbENELENBTXlDLGNBQWMsR0E0QnREO1NBNUJZLG1CQUFtQjs7O0lBQzlCLHFDQUFxQjs7SUFFckIsc0NBQ2dCOztJQUNoQixzQ0FDaUI7O0lBQ2pCLHFDQUNlOztJQUNmLDRDQUNzQjs7SUFDdEIsNENBQ3NCOztJQUN0QixxQ0FDZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1sYXllci1pbWFnZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJJbWFnZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBzb3VyY2U6IEltYWdlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wYWNpdHk6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBleHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlKHRoaXMpO1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=