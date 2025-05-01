export const CreditsInput = ({name, event, events, onChange, onClick}) => {
  <label>
    <span className="block text-sm font-medium text-gray-300 mb-1">{name}</span>
    <div className="flex gap-1">
      <input
        value={event}
        onChange={onChange}
        type="text"
        className="w-7/10 px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all "
        placeholder="Add caster..."
      />
      <button
        onClick={onClick}
        className="w-3/10 px-4 py-2 bg-blue-600 hover hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        Add
      </button>
    </div>
    {/* {events.length > -1 && (
      <span className="text-xs font-medium text-gray-300 ml-4">
        {event} : {events.join(",")}
      </span>
    )} */}
  </label>;
};
