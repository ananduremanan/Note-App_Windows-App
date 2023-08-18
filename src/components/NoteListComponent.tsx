function NoteListComponent({ noteData }: any) {
  return (
    <div>
      {noteData.map((item: any) => {
        const innerTestData = item.testData;
        const innerElements = innerTestData.map((data: any) => (
          <div key={data.id} className="flex-col bg-blue-200 rounded-lg p-4 mt-2">
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
