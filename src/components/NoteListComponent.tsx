function NoteListComponent({ noteData }: any) {
  if (noteData.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No notes available.
      </div>
    );
  }

  // Sort the noteData array based on the timeCreated property
  const sortedNoteData = [...noteData].sort((a: any, b: any) => {
    const timeA = a.testData[0]?.timeCreated || "";
    const timeB = b.testData[0]?.timeCreated || "";
    return timeB.localeCompare(timeA);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {sortedNoteData.map((item: any) => {
        if (!item.testData) return null; // check if testData is defined
        const innerTestData = item.testData;
        const innerElements = innerTestData.map((data: any) => (
          <div
            key={data.id}
            className="flex-col bg-blue-200 rounded-lg p-4 mt-2"
          >
            <div className="font-bold">{data.heading}</div>
            <div>{data.text}</div>
            <div className="text-xs text-gray-400 mt-1">
              {data.dateCreated ? data.dateCreated.toString() : "N/A"} •{" "}
              {data.timeCreated ? data.timeCreated.toString() : "N/A"}
            </div>
          </div>
        ));

        return <div key={item.id}>{innerElements}</div>;
      })}
    </div>
  );
}

export default NoteListComponent;
