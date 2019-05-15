/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { Extent } from 'ol/extent';
/**
 * @abstract
 */
var LayerComponent = /** @class */ (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    /**
     * @return {?}
     */
    LayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.precompose !== null && this.precompose !== undefined) {
            this.instance.on('precompose', this.precompose);
        }
        if (this.postcompose !== null && this.postcompose !== undefined) {
            this.instance.on('postcompose', this.postcompose);
        }
        this.host.instance.getLayers().push(this.instance);
    };
    /**
     * @return {?}
     */
    LayerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.host.instance.getLayers().remove(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LayerComponent.prototype.ngOnChanges = /**
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
                if (key === 'precompose') {
                    this.instance.un('precompose', changes[key].previousValue);
                    this.instance.on('precompose', changes[key].currentValue);
                }
                if (key === 'postcompose') {
                    this.instance.un('postcompose', changes[key].previousValue);
                    this.instance.on('postcompose', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    LayerComponent.propDecorators = {
        opacity: [{ type: Input }],
        visible: [{ type: Input }],
        extent: [{ type: Input }],
        zIndex: [{ type: Input }],
        minResolution: [{ type: Input }],
        maxResolution: [{ type: Input }],
        precompose: [{ type: Input }],
        postcompose: [{ type: Input }]
    };
    return LayerComponent;
}());
export { LayerComponent };
if (false) {
    /** @type {?} */
    LayerComponent.prototype.instance;
    /** @type {?} */
    LayerComponent.prototype.componentType;
    /** @type {?} */
    LayerComponent.prototype.opacity;
    /** @type {?} */
    LayerComponent.prototype.visible;
    /** @type {?} */
    LayerComponent.prototype.extent;
    /** @type {?} */
    LayerComponent.prototype.zIndex;
    /** @type {?} */
    LayerComponent.prototype.minResolution;
    /** @type {?} */
    LayerComponent.prototype.maxResolution;
    /** @type {?} */
    LayerComponent.prototype.precompose;
    /** @type {?} */
    LayerComponent.prototype.postcompose;
    /**
     * @type {?}
     * @protected
     */
    LayerComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQyxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSW5GLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFFbkM7SUFzQkUsd0JBQXNCLElBQXdDO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQW9DO1FBcEJ2RCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztJQW9Ca0MsQ0FBQzs7OztJQUVsRSxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztZQUMxQixVQUFVLEdBQTZCLEVBQUU7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDNUMsSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxJQUFJLEdBQUcsS0FBSyxhQUFhLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVEO2FBQ0Y7U0FDRjtRQUNELHNGQUFzRjtRQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7MEJBdERBLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7Z0NBRUwsS0FBSztnQ0FFTCxLQUFLOzZCQUdMLEtBQUs7OEJBRUwsS0FBSzs7SUF3Q1IscUJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTNEcUIsY0FBYzs7O0lBQ2xDLGtDQUFxQjs7SUFDckIsdUNBQStCOztJQUUvQixpQ0FDZ0I7O0lBQ2hCLGlDQUNpQjs7SUFDakIsZ0NBQ2U7O0lBQ2YsZ0NBQ2U7O0lBQ2YsdUNBQ3NCOztJQUN0Qix1Q0FDc0I7O0lBRXRCLG9DQUNpQzs7SUFDakMscUNBQ2tDOzs7OztJQUV0Qiw4QkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJ29sL2V2ZW50cyc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IGFueTtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdsYXllcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJlY29tcG9zZTogKGV2dDogRXZlbnQpID0+IHZvaWQ7XHJcbiAgQElucHV0KClcclxuICBwb3N0Y29tcG9zZTogKGV2dDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnByZWNvbXBvc2UgIT09IG51bGwgJiYgdGhpcy5wcmVjb21wb3NlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIHRoaXMucHJlY29tcG9zZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb3N0Y29tcG9zZSAhPT0gbnVsbCAmJiB0aGlzLnBvc3Rjb21wb3NlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCB0aGlzLnBvc3Rjb21wb3NlKTtcclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5wdXNoKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucmVtb3ZlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBpZiAoa2V5ID09PSAncHJlY29tcG9zZScpIHtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3ByZWNvbXBvc2UnLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVjb21wb3NlJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPT09ICdwb3N0Y29tcG9zZScpIHtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3Bvc3Rjb21wb3NlJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1sYXllciwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iXX0=