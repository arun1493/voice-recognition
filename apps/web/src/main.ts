import cors from "cors";
import express from "express";
import { StatusCodes } from "http-status-codes";

import initializeSocket from "./socket";
import pdfRoutes from "./routes/pdfRoutes";
import emrRoutes from "./routes/emrRoutes";
import { corsOptions } from "./middleware";
import authRoutes from "./routes/authRoutes";
import fhirRoutes from "./routes/fhirRoutes";
import embedRoutes from "./routes/embedRoutes";
import metricRoutes from "./routes/metricRoutes";
import macrosRoutes from "./routes/macrosRoutes";
import amwellRoutes from "./routes/amwellRoutes";
import logMessageRouter from "./routes/logMessage";
import desktopRoutes from "./routes/desktopRoutes";
import intercomRoutes from "./routes/intercomRoutes";
import edgCodesRoutes from "./routes/edgCodesRoutes";
import sectionsRoutes from "./routes/sectionsRoutes";
import patientsRoutes from "./routes/patientsRoutes";
import { skipVerifyJWT, verifyJWT } from "./helpers";
import noteLockRoutes from "./routes/noteLockRoutes";
import paymentsRoutes from "./routes/paymentsRoutes";
import noteTypesRoutes from "./routes/noteTypesRoutes";
import diagnosisRoutes from "./routes/diagnosisRoutes";
import preferenceRoutes from "./routes/preferenceRoutes";
import featureFlagsRoutes from "./routes/featureFlagsRoutes";
import importExportRoutes from "./routes/importExportRoutes";
import patientNotesRoutes from "./routes/patientNotesRoutes";
import compositionsRoutes from "./routes/compositionsRoutes";
import appointmentsRoutes from "./routes/appointmentsRoutes";
import registrationRoutes from "./routes/registrationRoutes";
import patientChartsRouter from "./routes/patientChartsRoute";
import organizationsRoutes from "./routes/organizationsRoutes";

/**
 * TODO: RC 10/26/2022 - This is to be removed after all environments are deployed
 * this is to help with us come up with a strategy on environment variables for the application
 **/
console.log("Environment Variables from Web UI Server", process.env);

const app = express();

app.use(express.json());

// Hide x-powered-by reponse header from client
app.disable("x-powered-by");

// Enable cors pre-flight options request across all requests
app.options("*", cors());

// Health check API implementation to support kubernets deployment
app.get("/healthz", (req, res) => {
  res.status(StatusCodes.OK).send();
});

app.use((req, res, next) => (skipVerifyJWT(req) ? next() : verifyJWT(req, res, next)));

// Before this step we verify jwt from okta, if origin is null
// we will confirm if the jwt is valid or not
app.use(cors(corsOptions));

app.use("/appointments", appointmentsRoutes);
app.use("/auth", authRoutes);
app.use("/compositions", compositionsRoutes);
app.use("/diagnosis", diagnosisRoutes);
app.use("/edg-codes", edgCodesRoutes);
app.use("/embed", embedRoutes);
app.use("/feature-flags", featureFlagsRoutes);
app.use("/fhir", fhirRoutes);
app.use("/import-export", importExportRoutes);
app.use("/intercom", intercomRoutes);
app.use("/log-message", logMessageRouter);
app.use("/metric", metricRoutes);
app.use("/note-types", noteTypesRoutes);
app.use("/notes", patientNotesRoutes);
app.use("/organizations", organizationsRoutes);
app.use("/patient-charts", patientChartsRouter);
app.use("/patients", patientsRoutes);
app.use("/payments", paymentsRoutes);
app.use("/pdf", pdfRoutes);
app.use("/registration", registrationRoutes);
app.use("/scripts", macrosRoutes);
app.use("/sections", sectionsRoutes);
app.use("/v1", amwellRoutes);
app.use("/note-lock", noteLockRoutes);
app.use("/desktop", desktopRoutes);
app.use("/preferences", preferenceRoutes);
app.use("/emr", emrRoutes);

const port = process.env.SUKI_API_PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

initializeSocket(server);
server.on("error", console.error);

export { app };
