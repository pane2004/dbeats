import { useExplorePublications } from '@lens-protocol/react-web';

export function CommunityPosts(){
  const { data, loading, hasMore, next } = useExplorePublications();
  console.log(data);
  return (<>hi</>)
}