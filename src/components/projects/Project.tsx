import ToolImage from "./ToolImage";

interface ProjectProps {
  name: string;
  livelink: string;
  github: string;
  description: string;
  image: string;
  tools: Object;
}

const Project = ({
  name,
  livelink,
  github,
  description,
  image,
  tools,
}: ProjectProps) => {
  return (
    <div className="flex flex-col lg:w-[48%] md:w-[96%] h-min dark:bg-[#1F2937] bg-white p-4 rounded-[32px] my-4">
      <div className="flex flex-col md:flex-row">
        <a
          href={livelink}
          className="w-[96%] md:w-[45%] m-3 hover:ring-gray-400 dark:hover:ring-gray-500 hover:ring-4 hover:transition duration-700 ease-in-out hover:cursor-default"
          target="_blank"
        >
          <img src={image} className="h-52 w-dvw object-cover" alt={name} />
        </a>
        <div className="w-[96%] md:w-[50%] m-3 flex flex-col justify-around">
          <h1 className="kanit text-xl">{name}</h1>
          <p className="text-sm dark:text-gray-300 text-gray-600">
            {description}
          </p>
          <div></div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <a href={livelink} target="_blank">
            <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full m-2 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
              <svg
                id="Arrow.7"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 18.256 18.256"
              >
                <g
                  id="Group_7"
                  data-name="Group 7"
                  transform="translate(5.363 5.325)"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M14.581,7.05,7.05,14.581"
                    transform="translate(-7.05 -7.012)"
                    fill="none"
                    stroke="#0D1117"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M10,7l5.287.037.038,5.287"
                    transform="translate(-7.756 -7)"
                    fill="none"
                    stroke="#0D1117"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </g>
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M0,0H18.256V18.256H0Z"
                  fill="none"
                ></path>
              </svg>
            </div>
          </a>
          <a href={github} target="_blank">
            <div className="w-10 h-10 rounded-full m-2 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80"
                width="80"
                viewBox="-74.4 -120.90175 644.8 725.4105"
                fill="black"
              >
                <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="flex">
          {Object.entries(tools).map(([key, { img, url }]) => [
            <ToolImage key={key} img={img} url={url} />,
          ])}
        </div>
      </div>
    </div>
  );
};

export default Project;
