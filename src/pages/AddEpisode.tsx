import EpisodeForm from "../components/admin/EpisodeForm";

/**
 * Refactoring -1
 * if this component JSX is only 4 lines long has 1 single sub component BUT...
 * it turns out that sub component is 65 lines long, then you havent refactored,
 * you just moved the problem elsewhere and thats worst than having a single component with 69 lines of code,
 * as you just added high coupling into the mix.
 */
export default function AddEpisode() {
  return (
    <div className="form">
      <h1>Add</h1>
      <EpisodeForm />
    </div>
  );
}
