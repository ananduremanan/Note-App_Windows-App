function NoteListComponent({ noteData }: any) {
  if (noteData.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No notes available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {noteData.map((item: any) => {
        const innerTestData = item.testData;
        const innerElements = innerTestData.map((data: any) => (
          <div
            key={data.id}
            className="flex-col bg-blue-200 rounded-lg p-4 mt-2"
          >
            <div className="font-bold">{data.heading}</div>
            <div>{data.text}</div>
            <div className="text-xs text-gray-400 mt-1">
              {data.dateCreated.toString()} • {data.timeCreated.toString()}
            </div>
          </div>
        ));

        return innerElements;
      })}
    </div>
  );
}

export default NoteListComponent;
