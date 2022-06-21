import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CircleIcon from '@mui/icons-material/Circle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const versionControlConfig = [
  {
    version: "2.7.4",
    date: "Jan 07, 2022",
    tags: ["none"],
    details: [
      "Bug repairs for 0 critical days",
      "Higher precision on calculations to reduce rounding errors",
      "If critical window is greater than the days-to-hatching, it is adjusted automatically and a warning is shown in the UI. Batch runs are silently corrected.",
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.7.3",
    date: "Nov 30, 2021",
    tags: ["none"],
    details: [
      "Redd distributions can be generated from Aerial surveys (since 1990) or Carcass surveys (since 2000). Aerial Survey results were the previous default.",
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.7.2",
    date: "Oct 12, 2021",
    tags: ["none"],
    details: [
      "Added server support and checkbox on GUI to generate query strings",
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.7.1",
    date: "Sep 13, 2021",
    tags: ["none"],
    details: [
      "Enhanced control over dewatering mortality",
      "PDF Documentation for dewatering mortality available from link",
      "PDF Documentation for redd forecasting available from link"
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.7",
    date: "Mar 1, 2021",
    tags: ["none"],
    details: [
      "A spawning model for forecasting redd distributions is now an option. Based on temperatures in April and May (historic, forecast, or user-provided) the FishModel will disribute redds according to methods of Dusek-Jennings and Hendrix (2020).",
      "Small changes to layout of the FishModel page.",
      "Small changes to the 'heatmap' graphics."
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.6.1",
    date: "Aug 9, 2021",
    tags: ["none"],
    details: [
      "Latest parameters from the calibration of Stage-Independent TDM model",
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.6",
    date: "Mar 1, 2021",
    tags: ["none"],
    details: [
      "Increased flexibility of input formats for temperature and redd data",
      "Padding of temperature values before and after data is done automatically",
      "Option of providing dates instead of day-of-year. Assumes non-leap year without a provided value for year.",
      "Accepted formats in month/day/(year) order. Examples: M/D MM/DD MM/DD/YY MM/DD/YYYY",
      "Enhanced bulk processing-with and access-to cached files. Contact developers at web@cbr.washington.edu for more information."
    ],
    mark: <CircleIcon style={{height: 40, width: 40}}/>
  },
  {
    version: "2.5",
    date: "Feb 17, 2021",
    tags: ["none"],
    details: [
      "Minor rearrangement of user controls and wording",
      "Survivals (mortality) outputs partioned to TDM, density/background, and dewatering",
      "Capability of bulk temperature uploads. Contact develpers at web@cbr.washington.edu for more information.",
      "Enhanced bulk processing methods. Contact develpers at web@cbr.washington.edu for more information."
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.4",
    date: "Jan 11, 2021",
    tags: ["fixed"],
    details: [
      "Capability of bulk processing for flow scenarios. Contact developers at web@cbr.washington.edu for more information.",
      "Migration modeling pages changed",
      "Detailed instructions for generating and using flow inputs available (PDF document).",
      "Expanded variety of formats acceptable for flow inputs.",
      "Use of day-of-year or dates (or mixed) allowed",
      "Complete time-series NOT required. The model will attempt to fill in missing values.",
      "Minor rerranging of user controls.",
      "Changes to default pulse-migration equations."
    ],
    mark: <CircleIcon style={{ height: 40, width: 40 }} />
  },{
    version: "2.3.1",
    date: "Dec 8, 2020",
    tags: ["fixed"],
    details: [
      "Hatching ATUs re-described better as 'end of critical window",
      "Moved SHINY apps home directory to cbr-cvpas.shinyapps.io",
    ],
    mark: <CircleIcon style={{ height: 40, width: 40}}/>
  },
  {
    version: "2.3",
    date: "July 16 2020",
    tags: ["fixed"],
    details: [
      "Adds option for selecting multiple years to create a redd distribution.",
      "Critical: Carrying cap methods for stage-independent density method modified to correct an upward survival bias in multi-reach density-effects calculations using total redds.",
      "Default RKM range widened to show all of the top 4 reaches by default. Still can be controlled by user.",
      "Reach 4 (Below Airport road to Jellys ferry) database redds location moved 5 km upstream to RKM450.",
      "Minor interface changes.",
      "Input report includes other details: date, version, and the multiple years of redd combinations if chosen."
    ],
    mark: <CircleNotificationsIcon style={{ height: 40, width: 40}} />
  },
  {
    version: "2.2",
    date: "May 5 2020",
    tags: ["fixed"],
    details: [
      "Input areas are grey to distinguish from outputs.",
      "Temp and non-temp mortality are better paired.",
      "Stage-dependent temp mortality can only use density-by-kilometer mortality.",
      "Default parameters adjusted to new calibrations.",
      "Result links are generated only after a model run.",
      "Single-point temperature profile choice is removed.",
      "An Input Report is generated for each run with user's parameter settings.",
      "A brief introduction is presented on page opening.",
      "SHINY temp profile builder (linked) is improved with choice of gradient or independent upstream/downstream profile generation.",
      "Both show-max and show-mean temperature exposure reports are generated (instead of a choice).",
      "Options for bulk processing exist. Must must contact developers for methods."
    ],
    mark: <FlagCircleIcon style={{ height: 40, width: 40 }} />
  },
  {
    version: "2.1",
    date: "N/A",
    tags: ["bugs", "fixed", "new feature"],
    details: ["Options for redd dewatering.", "Options for NOAA temperature forecasts."],
    mark: <FlagCircleIcon style={{ height: 40, width: 40}} />
  }
]

export default versionControlConfig;