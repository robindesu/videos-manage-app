import React from 'react';
import { ProcessedVideo } from '../common/interfaces';
import Button from '../elements/button';

interface VideosTableProps {
  videos: ProcessedVideo[];
  searchText: string;
}

const VideosTable: React.FC<VideosTableProps> = ({ videos, searchText }) => {
  const filteredVideos: ProcessedVideo[] = videos.filter((video: ProcessedVideo) =>
    video.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="table-container">
      <table className="w-full">
        <thead className="table-header-group">
          <tr className="table-row border-b-2 text-center">
            <th className="font-normal p-2 md:p-4">Video Name</th>
            <th className="font-normal p-2 md:p-4">Author</th>
            <th className="font-normal p-2 md:p-4">Categories</th>
            <th className="font-normal p-2 md:p-4">Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredVideos.map((video) => (
            <tr key={video.id} className="table-row">
              <td className="p-2 md:p-4">{video.name}</td>
              <td className="p-2 md:p-4">{video.author}</td>
              <td className="p-2 md:p-4">{video.categories.join(', ')}</td>
              <td className="p-4 flex justify-around flex-wrap">
                <Button color="blueRoyal">
                  <p>Edit</p>
                </Button>
                <Button color="redPink">
                  <p>Delete</p>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideosTable;
