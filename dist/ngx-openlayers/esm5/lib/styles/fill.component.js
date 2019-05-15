/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Fill } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
var StyleFillComponent = /** @class */ (function () {
    function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-fill with: ', this);
    }
    /**
     * @return {?}
     */
    StyleFillComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('creating ol.style.Fill instance with: ', this);
        this.instance = new Fill(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setFill(this.instance);
                // console.log('setting ol.style instance\'s fill:', this.host);
                break;
            case 'style-text':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                // console.log('setting ol.style.circle instance\'s fill:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
            // break;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StyleFillComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    };
    StyleFillComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style-fill',
                    template: "\n    <div class=\"aol-style-fill\"></div>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleFillComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Optional }] },
        { type: StyleCircleComponent, decorators: [{ type: Optional }] },
        { type: StyleTextComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleFillComponent.propDecorators = {
        color: [{ type: Input }]
    };
    return StyleFillComponent;
}());
export { StyleFillComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StyleFillComponent.prototype.host;
    /** @type {?} */
    StyleFillComponent.prototype.instance;
    /** @type {?} */
    StyleFillComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvZmlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJdEQ7SUFjRSw0QkFDYyxTQUF5QixFQUN6QixlQUFxQyxFQUNyQyxhQUFpQztRQUU3QyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjtRQUNELHVEQUF1RDtJQUN6RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsZ0VBQWdFO2dCQUNoRSxNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLHVFQUF1RTtnQkFDdkUsTUFBTTtZQUNSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELFNBQVM7U0FDVjtJQUNILENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsbUZBQW1GO0lBQ3JGLENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdEQUVUO2lCQUNGOzs7O2dCQVhRLGNBQWMsdUJBcUJsQixRQUFRO2dCQXBCSixvQkFBb0IsdUJBcUJ4QixRQUFRO2dCQXBCSixrQkFBa0IsdUJBcUJ0QixRQUFROzs7d0JBTlYsS0FBSzs7SUFvRFIseUJBQUM7Q0FBQSxBQS9ERCxJQStEQztTQXpEWSxrQkFBa0I7Ozs7OztJQUU3QixrQ0FBNkU7O0lBQzdFLHNDQUFzQjs7SUFFdEIsbUNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGwgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHlsZUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vY2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0eWxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ29sL2NvbG9yJztcclxuaW1wb3J0IHsgQ29sb3JMaWtlIH0gZnJvbSAnb2wvY29sb3JsaWtlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWZpbGwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWZpbGxcIj48L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVGaWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8qIHRoZSB0eXBpbmdzIGRvIG5vdCBoYXZlIHRoZSBzZXR0ZXJzICovXHJcbiAgcHJpdmF0ZSBob3N0OiAvKlN0eWxlQ29tcG9uZW50fFN0eWxlQ2lyY2xlQ29tcG9uZW50fFN0eWxlVGV4dENvbXBvbmVudCovIGFueTtcclxuICBwdWJsaWMgaW5zdGFuY2U6IEZpbGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IENvbG9yIHwgQ29sb3JMaWtlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlSG9zdDogU3R5bGVDb21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVUZXh0SG9zdDogU3R5bGVUZXh0Q29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBpZiAoIXN0eWxlSG9zdCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZS1zdHJva2UgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoISFzdHlsZVRleHRIb3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlVGV4dEhvc3Q7XHJcbiAgICB9IGVsc2UgaWYgKCEhc3R5bGVDaXJjbGVIb3N0KSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlQ2lyY2xlSG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlSG9zdDtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtZmlsbCB3aXRoOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkZpbGwgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZpbGwodGhpcyk7XHJcbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N0eWxlJzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0RmlsbCh0aGlzLmluc3RhbmNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZSBpbnN0YW5jZVxcJ3MgZmlsbDonLCB0aGlzLmhvc3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdHlsZS10ZXh0JzpcclxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0RmlsbCh0aGlzLmluc3RhbmNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3R5bGUtY2lyY2xlJzpcclxuICAgICAgICB0aGlzLmhvc3QuZmlsbCA9IHRoaXMuaW5zdGFuY2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuY2lyY2xlIGluc3RhbmNlXFwncyBmaWxsOicsIHRoaXMuaG9zdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGhvc3QgdHlwZTogJyArIHRoaXMuaG9zdCk7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydjb2xvciddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q29sb3IoY2hhbmdlc1snY29sb3InXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWZpbGwsIHNldHRpbmcgbmV3IGNvbG9yOiAnLCBjaGFuZ2VzKTtcclxuICB9XHJcbn1cclxuIl19