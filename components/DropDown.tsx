import { Menu, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

// Define the type of the `gradelevel` prop
export type GradelevelType =
  | "Vrtec"
  | "1. razred"
  | "2. razred"
  | "3. razred"
  | "4. razred"
  | "5. razred"
  | "6. razred"
  | "7. razred"
  | "8. razred"
  | "9. razred"
  | "10. razred"
  | "11. razred"
  | "12. razred"
  | "Kolegij '(alternativno: Višješolski program')";

// Define the props for the `DropDown` component
interface DropDownProps {
  gradelevel: GradelevelType;
  setGradelevel: (gradelevel: GradelevelType) => void;
}

const GRADELEVEL_ID = "grade-level-dropdown";

export const DropDown: React.FC<DropDownProps> = ({
  gradelevel,
  setGradelevel,
}) => {
  const gradelevels: GradelevelType[] = [
    "Vrtec",
    "1. razred",
    "2. razred",
    "3. razred",
    "4. razred",
    "5. razred",
    "6. razred",
    "7. razred",
    "8. razred",
    "9. razred",
    "10. razred",
    "11. razred",
    "12. razred",
    "Kolegij '(alternativno: Višješolski program')",
  ];
  return (
    <Menu
      as="div"
      className="relative block w-full text-left"
      key={`${GRADELEVEL_ID}-${gradelevel}`}
    >
      <div>
        {/* The Menu.Button element renders the main button of the dropdown, which displays the currently selected grade level. */}
        <Menu.Button className="inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
          {gradelevel}
          <ChevronUpIcon
            className="-mr-1 ml-2 h-5 w-5 ui-open:hidden"
            aria-hidden="true"
          />
          <ChevronDownIcon
            className="-mr-1 ml-2 hidden h-5 w-5 ui-open:block"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      {/* The Transition component handles the animation when the dropdown is opened and closed. */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* The Menu.Items element renders the list of selectable grade levels, which appears when the dropdown button is clicked. */}
        <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="h-32 overflow-y-scroll">
            {gradelevels.map((gradelevelItem) => (
              // The Menu.Item element represents a selectable item in the list of grade levels.
              <Menu.Item key={gradelevelItem}>
                {({ active }: { active: boolean }) => (
                  // The button inside the Menu.Item element displays the grade level and allows the user to select it.
                  <button
                    onClick={() => setGradelevel(gradelevelItem)}
                    className={`flex w-full items-center justify-between space-x-2 px-4 py-2 text-left text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } ${gradelevel === gradelevelItem ? "bg-gray-200" : ""}`}
                  >
                    <span>{gradelevelItem}</span>
                    {/* The CheckIcon component displays a checkmark next to the currently selected grade level. */}
                    {gradelevel === gradelevelItem ? (
                      <CheckIcon className="text-bold h-4 w-4" />
                    ) : null}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
