import React, { useEffect, useState } from "react";
import DeviceDescription from "./utils/DeviceDescription";
import DeviceLocation from "./utils/DeviceLocation";
import Box from "./shared/Box";
import DemoGauge from "./utils/DemoGauge";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EstatusSistema() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 ">
      <div className="flex flex-row gap-4 w-full">
        {/* <Box flex={2}> */}
        <Box flex={3}>
          <DeviceDescription
            chartName={"Descripción del sistema"}
            dataPath={"status-desc"}
            dataRate={5000}
          />
        </Box>

        <Box>
          <DeviceLocation
            chartName={"Ubicación del Montacargas"}
            dataPath={"status-loc"}
            dataRate={2000}
          />
        </Box>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <Box>
          <DemoGauge
            chartName={"Velocidad"}
            dataPath={"speed"}
            dataRate={1000}
            gaugeUnit="km/h"
            maxValue={20}
          />
        </Box>

        <Box>
          <DemoGauge
            chartName={"Carga"}
            dataPath={"load"}
            dataRate={1000}
            gaugeUnit="mA"
            maxValue={10}
          />
        </Box>
      </div>
    </div>
  );
}

function EstatusSistema1() {
  return (
    <div className="grid grid-cols-2 w-full gap-4 p-4">
      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <DeviceDescription
            chartName={"Descripción del sistema"}
            dataPath={"status-desc"}
            dataRate={5000}
          />
        </Box>

        <Box>
          <DeviceLocation
            chartName={"Ubicación del Montacargas"}
            dataPath={"status-loc"}
            dataRate={2000}
          />
        </Box>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <Box>
          <DemoGauge
            chartName={"Velocidad"}
            dataPath={"status-desc"}
            dataRate={5000}
          />
        </Box>

        <Box>
          <DemoGauge
            chartName={"Carga"}
            dataPath={"status-desc"}
            dataRate={5000}
          />
        </Box>
      </div>
    </div>
  );
}
