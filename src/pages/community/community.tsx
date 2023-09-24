import { useSearchPublications } from "@lens-protocol/react-web";

export function CommunityPosts() {
  const { data, loading } = useSearchPublications({
    query: "music",
    limit: 20,
  }); //for prod query for dBeats
  console.log(data);
  return (
    <div className="w-5/6 bg-gray-800 p-6 max-h-screen min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="max-w-1/2 pt-8">
        <div className="flex justify-between items-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Browse Community Posts
          </h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg focus:outline-none hover:bg-blue-600 active:bg-blue-700">
            Create Post
          </button>
        </div>
        {loading && <div>loading...</div>}
        {data && Array.isArray(data) && (
          <div className="container mx-auto mt-10 grid grid-cols-3 gap-8 p-10">
            {data.map((item, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-xl shadow-lg text-white">
                <div className="mt-4 px-6">
                  <h2 className="text-2xl font-semibold">
                    {item.profile.name}
                  </h2>
                  <p className="text-gray-400">@{item.profile.handle}</p>
                  <p className="mt-2">{item.profile.bio}</p>

                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">
                      {item.metadata.name}
                    </h3>
                    <p>{item.metadata.description}</p>
                    <div className="mt-2">
                      <img
                        src={
                          item.metadata.image
                            ? item.metadata.image
                            : item.metadata.media &&
                              item.metadata.media[0] &&
                              item.metadata.media[0].original
                            ? item.metadata.media[0].original.url
                            : undefined
                        }
                        alt="Media"
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
