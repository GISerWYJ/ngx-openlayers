/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Host, Input } from '@angular/core';
import { ImageArcGISRest } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { LoadFunction } from 'ol/Image';
var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceImageArcGISRestComponent, _super);
    function SourceImageArcGISRestComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.ratio = 1.5;
        return _this;
    }
    /**
     * @return {?}
     */
    SourceImageArcGISRestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SourceImageArcGISRestComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceImageArcGISRestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-imagearcgisrest',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceImageArcGISRestComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceImageArcGISRestComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    SourceImageArcGISRestComponent.propDecorators = {
        projection: [{ type: Input }],
        url: [{ type: Input }],
        attributions: [{ type: Input }],
        crossOrigin: [{ type: Input }],
        imageLoadFunction: [{ type: Input }],
        params: [{ type: Input }],
        ratio: [{ type: Input }],
        resolutions: [{ type: Input }],
        wrapX: [{ type: Input }]
    };
    return SourceImageArcGISRestComponent;
}(SourceComponent));
export { SourceImageArcGISRestComponent };
if (false) {
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.instance;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.projection;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.url;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.attributions;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.imageLoadFunction;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.params;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.ratio;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.resolutions;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.wrapX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFeEM7SUFPb0QsMERBQWU7SUFhakUsd0NBQW9CLEtBQTBCO1FBQTlDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFOUSxXQUFLLEdBQUcsR0FBRyxDQUFDOztJQU1yQixDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsb0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHFDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSw4QkFBOEIsRUFBOUIsQ0FBOEIsRUFBQyxFQUFFLENBQUM7aUJBQ3pHOzs7O2dCQVpRLG1CQUFtQix1QkEwQmIsSUFBSTs7OzZCQVZoQixLQUFLO3NCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFnQlIscUNBQUM7Q0FBQSxBQWxDRCxDQU9vRCxlQUFlLEdBMkJsRTtTQTNCWSw4QkFBOEI7OztJQUN6QyxrREFBMEI7O0lBRTFCLG9EQUE2Qzs7SUFDN0MsNkNBQXFCOztJQUNyQixzREFBeUM7O0lBQ3pDLHFEQUE4Qjs7SUFDOUIsMkRBQTBDOztJQUMxQyxnREFBdUM7O0lBQ3ZDLCtDQUFxQjs7SUFDckIscURBQWdDOztJQUNoQywrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZUFyY0dJU1Jlc3QgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZWFyY2dpc3Jlc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogSW1hZ2VBcmNHSVNSZXN0O1xyXG5cclxuICBASW5wdXQoKSBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKSBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZVtdO1xyXG4gIEBJbnB1dCgpIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIHBhcmFtcz86IHsgW2s6IHN0cmluZ106IGFueSB9O1xyXG4gIEBJbnB1dCgpIHJhdGlvID0gMS41O1xyXG4gIEBJbnB1dCgpIHJlc29sdXRpb25zPzogbnVtYmVyW107XHJcbiAgQElucHV0KCkgd3JhcFg/OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VBcmNHSVNSZXN0KHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19