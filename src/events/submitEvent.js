import submitHandler from "../handlers/submitHandler.js";
import dom from "../dom.js";

const submitEvent = dom.form.addEventListener('submit', (e) => submitHandler(e));

export default submitEvent;