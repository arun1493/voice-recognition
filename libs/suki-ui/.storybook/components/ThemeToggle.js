import _noop from "lodash/noop";

const ThemeToggle = ({ onChange = _noop }) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <form>
      <label>
        Dark
        <input type="radio" name="theme" value="dark" onChange={handleChange} />
      </label>
      <label>
        Light
        <input type="radio" name="theme" value="light" onChange={handleChange} />
      </label>
    </form>
  );
};

export { ThemeToggle };

export default ThemeToggle;
