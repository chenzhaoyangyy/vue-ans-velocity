import Velocity from "velocity-animate";
import './css/index.css'
import "animate.css";

let animate = null;
const Transition = {
    "before-enter"(el) {
        el.setAttribute("class", "");
    },
    enter(el, done) {
        let add = Velocity(el, animate[0], {duration: 500});
        add.catch(() => {
            el.classList.add("animate__animated");
            el.classList.add("animate__" + animate[0]);
        });
        done();
    },
    "before-leave"(el) {
        el.setAttribute("class", "");
        el.classList.add("ans_show");
    },
    leave(el, done) {
        el.classList.add("ans_show");
        let add = Velocity(el, animate[1], {duration: 500});
        add.catch(() => {
            el.classList.add("animate__animated");
            el.classList.add("animate__" + animate[1]);
        });
        done();
    },
    "after-leave"(el) {
        setTimeout(() => {
            el.classList.remove("ans_show");
        }, 450);
    },
};

export default {
    name: "Ans",
    functional: true,
    render(h, context) {
        animate = context.data.attrs["ans-data"];
        const data = {
            on: Transition,
        };
        return h("transition", data, context.children);
    },
};
