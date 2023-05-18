import _omit from "lodash/omit";

const omitProtoBufErrorFields = (apiPayload) => _omit(apiPayload, "composition.metadata.appointment.composition_id");

export { omitProtoBufErrorFields };
