/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
var StyleTextComponent = /** @class */ (function () {
    function StyleTextComponent(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    /**
     * @return {?}
     */
    StyleTextComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StyleTextComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['font']) {
            this.instance.setFont(changes['font'].currentValue);
        }
        if (changes['offsetX']) {
            this.instance.setOffsetX(changes['offsetX'].currentValue);
        }
        if (changes['offsetY']) {
            this.instance.setOffsetY(changes['offsetY'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['text']) {
            this.instance.setText(changes['text'].currentValue);
        }
        if (changes['textAlign']) {
            this.instance.setTextAlign(changes['textAlign'].currentValue);
        }
        if (changes['textBaseLine']) {
            this.instance.setTextBaseline(changes['textBaseLine'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-text, setting new properties: ', changes);
    };
    StyleTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style-text',
                    template: "\n    <div class=\"aol-style-text\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleTextComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleTextComponent.propDecorators = {
        font: [{ type: Input }],
        offsetX: [{ type: Input }],
        offsetY: [{ type: Input }],
        scale: [{ type: Input }],
        rotateWithView: [{ type: Input }],
        rotation: [{ type: Input }],
        text: [{ type: Input }],
        textAlign: [{ type: Input }],
        textBaseLine: [{ type: Input }]
    };
    return StyleTextComponent;
}());
export { StyleTextComponent };
if (false) {
    /** @type {?} */
    StyleTextComponent.prototype.instance;
    /** @type {?} */
    StyleTextComponent.prototype.componentType;
    /** @type {?} */
    StyleTextComponent.prototype.font;
    /** @type {?} */
    StyleTextComponent.prototype.offsetX;
    /** @type {?} */
    StyleTextComponent.prototype.offsetY;
    /** @type {?} */
    StyleTextComponent.prototype.scale;
    /** @type {?} */
    StyleTextComponent.prototype.rotateWithView;
    /** @type {?} */
    StyleTextComponent.prototype.rotation;
    /** @type {?} */
    StyleTextComponent.prototype.text;
    /** @type {?} */
    StyleTextComponent.prototype.textAlign;
    /** @type {?} */
    StyleTextComponent.prototype.textBaseLine;
    /**
     * @type {?}
     * @private
     */
    StyleTextComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUE2QkUsNEJBQWdDLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBckI3QyxrQkFBYSxHQUFHLFlBQVksQ0FBQztRQXNCbEMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtRQUNELHVEQUF1RDtJQUN6RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHdGQUF3RjtJQUMxRixDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxnREFFVDtpQkFDRjs7OztnQkFQUSxjQUFjLHVCQStCUixRQUFROzs7dUJBbkJwQixLQUFLOzBCQUVMLEtBQUs7MEJBRUwsS0FBSzt3QkFFTCxLQUFLO2lDQUVMLEtBQUs7MkJBRUwsS0FBSzt1QkFFTCxLQUFLOzRCQUVMLEtBQUs7K0JBRUwsS0FBSzs7SUErQ1IseUJBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQW5FWSxrQkFBa0I7OztJQUM3QixzQ0FBc0I7O0lBQ3RCLDJDQUFvQzs7SUFFcEMsa0NBQ3lCOztJQUN6QixxQ0FDNEI7O0lBQzVCLHFDQUM0Qjs7SUFDNUIsbUNBQzBCOztJQUMxQiw0Q0FDb0M7O0lBQ3BDLHNDQUM2Qjs7SUFDN0Isa0NBQ3lCOztJQUN6Qix1Q0FDOEI7O0lBQzlCLDBDQUNpQzs7Ozs7SUFFckIsa0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtdGV4dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtdGV4dFwiPjwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHVibGljIGluc3RhbmNlOiBUZXh0O1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLXRleHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZvbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldFg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIG9mZnNldFk6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHNjYWxlOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHJvdGF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICB0ZXh0QWxpZ246IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKVxyXG4gIHRleHRCYXNlTGluZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7XHJcbiAgICBpZiAoIWhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtdGV4dCBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtdGV4dCB3aXRoOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLlRleHQgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRleHQodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0VGV4dCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snZm9udCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Rm9udChjaGFuZ2VzWydmb250J10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydvZmZzZXRYJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRYKGNoYW5nZXNbJ29mZnNldFgnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ29mZnNldFknXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9mZnNldFkoY2hhbmdlc1snb2Zmc2V0WSddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snc2NhbGUnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXNbJ3NjYWxlJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydyb3RhdGlvbiddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlc1sncm90YXRpb24nXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3RleHQnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHQoY2hhbmdlc1sndGV4dCddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1sndGV4dEFsaWduJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QWxpZ24oY2hhbmdlc1sndGV4dEFsaWduJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd0ZXh0QmFzZUxpbmUnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHRCYXNlbGluZShjaGFuZ2VzWyd0ZXh0QmFzZUxpbmUnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLXRleHQsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=