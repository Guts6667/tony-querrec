export default function Honeypot() {
    return (
      <div style={{ display: 'none' }}>
        <input type="text" name="honeypot" tabIndex="-1" autoComplete="off" />
      </div>
    );
  }