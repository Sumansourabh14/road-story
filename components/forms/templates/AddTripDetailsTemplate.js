"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import LoadingButton from "@/components/buttons/LoadingButton";

const AddTripDetailsTemplate = ({
  loading,
  error,
  handleSubmit,
  source,
  destination,
  handleSourceChange,
  handleDestinationChange,
  isOneWay,
  handleOneWayChange,
  totalKm,
  handleTotalKmChange,
  foodStops,
  handleFoodStopChange,
  addFoodStop,
  removeFoodStop,
  notes,
  handleNotesChange,
  brand,
  handleBrandChange,
  model,
  handleModelChange,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-4 p-6 shadow-lg rounded-lg"
    >
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <div>
        <Label htmlFor="source">Source</Label>
        <Input
          id="source"
          value={source}
          onChange={handleSourceChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="destination">Destination</Label>
        <Input
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="isOneWay">One-way Trip</Label>
        <Switch
          id="isOneWay"
          checked={isOneWay}
          onCheckedChange={handleOneWayChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="brand">Vehicle Brand</Label>
          <Input id="brand" value={brand} onChange={handleBrandChange} />
        </div>
        <div>
          <Label htmlFor="model">Vehicle Model</Label>
          <Input id="model" value={model} onChange={handleModelChange} />
        </div>
      </div>

      <div>
        <Label htmlFor="totalKm">Total Km</Label>
        <Input
          id="totalKm"
          type="number"
          value={totalKm}
          onChange={handleTotalKmChange}
          required
        />
      </div>

      <div>
        <Label>Food Stops</Label>
        {foodStops.map((stop, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              type="text"
              value={stop}
              onChange={(e) => handleFoodStopChange(index, e.target.value)}
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeFoodStop(index)}
            >
              ✕
            </Button>
          </div>
        ))}
        <Button type="button" onClick={addFoodStop} className="mt-2">
          + Add Food Stop
        </Button>
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" value={notes} onChange={handleNotesChange} />
      </div>

      <LoadingButton loading={loading} title={"Save Trip"} />
    </form>
  );
};

export default AddTripDetailsTemplate;
