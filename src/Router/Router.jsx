import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard";
import App from "../App";
import Calculator from "../Calculator";
import CalculatorWithClass from "../CalculatorWithClass"
import ColorPicker from "../ColorPIcker";
import ColorPickerWithClass from "../ColorPickerWithClass";
import CounterButton from "../CounterButton";
import CounterWithClass from "../CounterWithClass"
import HOCWithCounter from "../HOCWithCounter"
import LoadingSpinner from "../LoadingSpinner"
import QuoteGenerator from "../QuoteGenerator"
import Todo from "../Todo"
import Permission from "../Permission";
import HOCWithErrorBoundary from "../HOCWIthErrorBoundary";
import WindowWidth from "../WindowWidth";
import CounterWithPure from "../CounterWithPure";
import UserProfile from "../UserProfile";
import MemorizeItem from "../MemorizeItem";
import ProductCard from "../ProductCard";
import TodoWithPure from "../TodoWithPure";
import ControlledInputField from "../ControlledInputField";
import ControlledCheckbox from "../ControlledCheckbox";
import ControlledDropdown from "../ControlledDropdown";
import ControlledWithManyInput from "../ControlledManyInput";
import ControlledRadioButton from "../ControlledRadioButton";
import UncontrolInput from "../UncontrolInput";
import UncontrolledRadioButton from "../UnctrolledRadioButton";
import AutoFocusInput from "../AutoFocusInput";
import VideoPlayer from "../VideoPlayer";
import FormSubmission from "../FormSubmission";
import AnimatingDiv from "../AnimatingDiv";
import ControlingModel from "../ControlingModel";
import TImerWithUseEffect from "../TImerWithUseEffect";
import FetchData from "../FetchData";
import WindowResize from "../WindowResize";
import Subscription from "../Subscription";
import DocumentTitleUpdater from "../DocumentTitleUpdater";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/calculator",
                element: <Calculator />
            },
            {
                path: "/calculatorWithClass",
                element: <CalculatorWithClass />
            },
            {
                path: "/colorPicker",
                element: <ColorPicker />
            },
            {
                path: "/colorPickerWithClass",
                element: <ColorPickerWithClass />
            },
            {
                path: "/counter",
                element: <CounterButton />
            },
            {
                path: "/counterWithClass",
                element: <CounterWithClass />
            },
            {
                path: "/HOCWithCounter",
                element: <HOCWithCounter />
            },
            {
                path: "/LoadingSpinner",
                element: <LoadingSpinner />
            },
            {
                path: "/quoteGenerator",
                element: <QuoteGenerator />
            },
            {
                path: "/todo",
                element: <Todo />
            },
            {
                path: "/withPermission",
                element: <Permission />
            },
            {
                path: "/HOCWIthErrorBoundary",
                element: <HOCWithErrorBoundary />
            },
            {
                path: "/WindowWidth",
                element: <WindowWidth />
            },
            {
                path: "/counterWithPure",
                element: <CounterWithPure />
            },
            {
                path: "/userProfile",
                element: <UserProfile />
            },
            {
                path: "/memorizeItem",
                element: <MemorizeItem />
            },
            {
                path: "/productCard",
                element: <ProductCard />
            },
            {
                path: "/todoWithPure",
                element: <TodoWithPure />
            },
            {
                path: "/controlledInputField",
                element: <ControlledInputField />
            },
            {
                path: "/controlledCheckbox",
                element: <ControlledCheckbox />
            },
            {
                path: "/controlledDropdown",
                element: <ControlledDropdown />
            },
            {
                path: "/controlledManyInput",
                element: <ControlledWithManyInput />
            },
            {
                path: "/controlledRadioButton",
                element: <ControlledRadioButton />
            },
            {
                path: "/uncontrolInput",
                element: <UncontrolInput />
            },
            {
                path: "/uncontrolledRadioButton",
                element: <UncontrolledRadioButton />
            },
            {
                path: "/autoFocusInput",
                element: <AutoFocusInput />
            },
            {
                path: "/videoPlayer",
                element: < VideoPlayer />
            },
            {
                path: "/formSubmission",
                element: <FormSubmission />
            },
            {
                path: "/animatingDIv",
                element: <AnimatingDiv />
            },
            {
                path: "/controlingModel",
                element: <ControlingModel />
            },
            {
                path: "/timer",
                element: <TImerWithUseEffect />
            },
            {
                path: "/fetchDataUseEffect",
                element: <FetchData />
            },
            {
                path: "/windowResize",
                element: <WindowResize />
            },
            {
                path: "/subscription",
                element: <Subscription />
            },
            {
                path: "/documentTitleUpdater",
                element: <DocumentTitleUpdater />
            }
        ]
    }
])


export default router;