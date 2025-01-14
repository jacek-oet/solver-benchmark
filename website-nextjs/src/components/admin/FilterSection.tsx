import {
  BrightIcon,
  PolygonIcon,
  ProcessorIcon,
  WrenchIcon,
} from "@/assets/icons"
import { useSelector, useDispatch } from "react-redux"
import { Sector, Technique, KindOfProblem, Model } from "@/constants"
import filterAction from "@/redux/filters/actions"
import { FilterState } from "@/redux/filters/reducer"

const FilterSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>()

  const selectedFilters = useSelector(
    (state: { filters: FilterState }) => state.filters
  )

  const handleCheckboxChange = (category: string, value: string) => {
    dispatch(filterAction.toggleFilterAndUpdateResults({ category, value }))
  }

  const getLabel = (type: string, value: string) => {
    switch (type) {
      case "sectors":
        switch (value) {
          case Sector.SectorCoupled:
            return "Sector coupled"

          default:
            return value
        }
      case "model":
        switch (value) {
          case Model.GenX:
            return "Gen X"
          case Model.PowerModel:
            return "Power Model"
          case Model.PyPSAEur:
            return "PyPSA - Eur"
          default:
            return value
        }
      default:
        throw Error("Invalid value")
    }
  }

  return (
    <div className="bg-white rounded-xl my-2">
      <div className="grid grid-cols-6 text-dark-grey">
        {/* Sectors */}
        <div className="text-xs">
          <div className="flex items-center border-b border-stroke px-3 py-2 gap-1 pr-6">
            <BrightIcon className="w-5 h-5" />
            <span>Sectors</span>
          </div>
          <div className="text-xs">
            {Object.values(Sector).map((sector) => (
              <div className="flex items-center gap-1 p-3" key={sector}>
                <input
                  className="w-4 h-4 accent-navy rounded"
                  type="checkbox"
                  checked={selectedFilters?.sectors?.includes(sector)}
                  onChange={() => handleCheckboxChange("sectors", sector)}
                />
                <span className="w-max">{getLabel("sectors", sector)}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Technique */}
        <div className="text-xs border-r border-stroke">
          <div className="flex items-center border-b border-stroke px-3 py-2 gap-1 pr-6">
            <ProcessorIcon className="w-5 h-5" />
            <span>Technique</span>
          </div>
          <div className="text-xs">
            {Object.values(Technique).map((technique) => (
              <div className="flex items-center gap-1 p-3" key={technique}>
                <input
                  className="w-4 h-4 accent-navy rounded"
                  type="checkbox"
                  checked={selectedFilters?.technique?.includes(technique)}
                  onChange={() => handleCheckboxChange("technique", technique)}
                />
                <span className="w-max">{technique}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Kind of Problem */}
        <div className="text-xs border-r border-stroke col-span-2">
          <div className="flex items-center border-b border-stroke px-3 py-2 gap-1">
            <WrenchIcon className="w-5 h-5" />
            <span>Kind of Problem</span>
          </div>
          <div className="grid grid-cols-[max-content_max-content] gap-x-1 text-xs">
            {Object.values(KindOfProblem).map((problem) => (
              <div className="flex items-center gap-1 p-3" key={problem}>
                <input
                  className="w-4 h-4 accent-navy rounded"
                  type="checkbox"
                  checked={selectedFilters?.kindOfProblem?.includes(problem)}
                  onChange={() =>
                    handleCheckboxChange("kindOfProblem", problem)
                  }
                />
                <span className="w-max">{problem}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Model */}
        <div className="text-xs border-r border-stroke col-span-2 w-full">
          <div className="flex items-center border-b border-stroke px-3 py-2 gap-1">
            <PolygonIcon className="w-5 h-5" />
            <span>Model</span>
          </div>
          <div className="grid grid-cols-3 gap-x-2 text-xs">
            {Object.values(Model).map((model) => (
              <div className="flex items-center gap-1 p-3" key={model}>
                <input
                  className="w-4 h-4 accent-navy rounded"
                  type="checkbox"
                  checked={selectedFilters?.modelName?.includes(model)}
                  onChange={() => handleCheckboxChange("modelName", model)}
                />
                <span className="w-max">{getLabel('model',model)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection
