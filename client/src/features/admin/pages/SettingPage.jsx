import { useState } from "react";
import { User, Lock, Bell, Store, Save } from "lucide-react";
import AdminLayout from "../components/AdminLayout";

const tabs = [
  { label: "Profile", icon: User, id: "profile" },
  { label: "Security", icon: Lock, id: "security" },
  { label: "Notifications", icon: Bell, id: "notifications" },
  { label: "Store", icon: Store, id: "store" },
];

function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <AdminLayout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-6">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Settings
            </h2>
            <p className="text-sm text-black/50 mt-1">
              Manage your account and store preferences.
            </p>
          </div>
          <button
            onClick={handleSave}
            className="w-full sm:w-auto bg-black text-white px-5 py-3 flex items-center justify-center gap-2 uppercase tracking-[2px] text-xs active:scale-95 transition-transform"
          >
            <Save size={15} />
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar Tabs */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm p-3 flex lg:flex-col gap-1 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-[2px] rounded-sm transition whitespace-nowrap w-full text-left ${
                      isActive
                        ? "bg-black text-white"
                        : "text-black/50 hover:text-black hover:bg-neutral-50"
                    }`}
                  >
                    <Icon size={15} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm p-6 sm:p-8">
            {activeTab === "profile" && <ProfileSettings />}
            {activeTab === "security" && <SecuritySettings />}
            {activeTab === "notifications" && <NotificationSettings />}
            {activeTab === "store" && <StoreSettings />}
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}

/* ── Profile ── */
function ProfileSettings() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Profile Information" desc="Update your name, email, and avatar." />

      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-100 flex-shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADvEYwau7bn_zEbeadYXwf7zQHp6-8CbkPj1zueJjdN1NUo1FnLkwKvxtSsL4uAUYzLfzhQLLsOwL7JzSlbu0lJvpYog1CNwSTQsseEXEB-39ta3U8f1Ov13uu0-6dmX3CefklB9_3RBIajV661S6RsDHiS1zTJ0ZcjxLmVQAp99KTgpRehoWDxYkU_rN0E1l3yKAf5Dc22ftGOPvplL4ErfV234NdkLleDFKltCReF8fqR3pU4-WJcFtn84o20d9XlBZdQOYE"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <button className="text-xs uppercase tracking-[2px] border border-black/20 px-4 py-2 hover:border-black transition">
            Change Photo
          </button>
          <p className="text-xs text-black/40 mt-2">JPG or PNG. Max 2MB.</p>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First Name" defaultValue="Alex" />
        <Field label="Last Name" defaultValue="Rivera" />
        <Field label="Email Address" defaultValue="alex@zivora.com" type="email" />
        <Field label="Phone Number" defaultValue="+1 (555) 000-0000" type="tel" />
      </div>

      <Divider />

      <div>
        <FieldLabel label="Bio" />
        <textarea
          rows={3}
          defaultValue="Admin at Zivora. Overseeing operations, inventory, and customer experience."
          className="w-full mt-1 px-4 py-3 text-sm border border-black/10 bg-[#fbf9f9] rounded-sm focus:outline-none focus:border-black/30 resize-none transition"
        />
      </div>
    </div>
  );
}

/* ── Security ── */
function SecuritySettings() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Security" desc="Update your password and manage login sessions." />

      <div className="space-y-5 max-w-md">
        <Field label="Current Password" type="password" placeholder="••••••••" />
        <Field label="New Password" type="password" placeholder="••••••••" />
        <Field label="Confirm New Password" type="password" placeholder="••••••••" />
      </div>

      <Divider />

      <div>
        <p className="text-xs uppercase tracking-[3px] text-black/40 mb-4">Two-Factor Authentication</p>
        <div className="flex items-center justify-between p-4 border border-black/10 rounded-sm max-w-md">
          <div>
            <p className="text-sm font-semibold">Authenticator App</p>
            <p className="text-xs text-black/50 mt-0.5">Add an extra layer of security to your account.</p>
          </div>
          <Toggle />
        </div>
      </div>

      <Divider />

      <div>
        <p className="text-xs uppercase tracking-[3px] text-black/40 mb-4">Active Sessions</p>
        {[
          { device: "MacBook Pro — Chrome", location: "Mumbai, IN", current: true },
          { device: "iPhone 15 — Safari", location: "Mumbai, IN", current: false },
        ].map((s) => (
          <div key={s.device} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0">
            <div>
              <p className="text-sm font-medium">{s.device}</p>
              <p className="text-xs text-black/40">{s.location}</p>
            </div>
            {s.current ? (
              <span className="text-[10px] uppercase tracking-[2px] bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold">
                Current
              </span>
            ) : (
              <button className="text-xs text-red-500 uppercase tracking-[2px] hover:underline">
                Revoke
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Notifications ── */
function NotificationSettings() {
  const prefs = [
    { label: "New Orders", desc: "Get notified when a customer places an order.", defaultOn: true },
    { label: "Order Status Updates", desc: "Alerts when an order is shipped or delivered.", defaultOn: true },
    { label: "Low Inventory Warnings", desc: "Notify when a product stock falls below 5 units.", defaultOn: true },
    { label: "New Customer Registrations", desc: "Alert when a new customer signs up.", defaultOn: false },
    { label: "Campaign Performance", desc: "Weekly digest of campaign stats.", defaultOn: false },
    { label: "System Maintenance", desc: "Downtime and update notifications.", defaultOn: true },
  ];

  return (
    <div className="space-y-8">
      <SectionTitle title="Notifications" desc="Choose what updates you want to receive." />
      <div className="space-y-1">
        {prefs.map((p) => (
          <div key={p.label} className="flex items-center justify-between py-4 border-b border-black/5 last:border-0">
            <div className="pr-6">
              <p className="text-sm font-semibold">{p.label}</p>
              <p className="text-xs text-black/50 mt-0.5">{p.desc}</p>
            </div>
            <Toggle defaultOn={p.defaultOn} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Store ── */
function StoreSettings() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Store Settings" desc="Configure your Zivora storefront details." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Store Name" defaultValue="Zivora" />
        <Field label="Support Email" defaultValue="support@zivora.com" type="email" />
        <Field label="Currency" defaultValue="USD" />
        <Field label="Timezone" defaultValue="Asia/Kolkata (IST)" />
      </div>

      <Divider />

      <div>
        <FieldLabel label="Store Description" />
        <textarea
          rows={3}
          defaultValue="Zivora — a curated luxury fashion destination for the modern wardrobe."
          className="w-full mt-1 px-4 py-3 text-sm border border-black/10 bg-[#fbf9f9] rounded-sm focus:outline-none focus:border-black/30 resize-none transition"
        />
      </div>

      <Divider />

      <div>
        <p className="text-xs uppercase tracking-[3px] text-black/40 mb-4">Danger Zone</p>
        <div className="border border-red-200 rounded-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-red-600">Delete Store</p>
            <p className="text-xs text-black/50 mt-0.5">
              Permanently delete your store and all associated data. This cannot be undone.
            </p>
          </div>
          <button className="flex-shrink-0 text-xs uppercase tracking-[2px] border border-red-400 text-red-500 px-4 py-2 hover:bg-red-500 hover:text-white transition">
            Delete Store
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Shared primitives ── */
function SectionTitle({ title, desc }) {
  return (
    <div className="pb-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-black/50 mt-1">{desc}</p>
    </div>
  );
}

function Divider() {
  return <hr className="border-black/5" />;
}

function FieldLabel({ label }) {
  return (
    <label className="text-xs uppercase tracking-[2px] text-black/50">{label}</label>
  );
}

function Field({ label, defaultValue, type = "text", placeholder }) {
  return (
    <div>
      <FieldLabel label={label} />
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-3 text-sm border border-black/10 bg-[#fbf9f9] rounded-sm focus:outline-none focus:border-black/30 transition"
      />
    </div>
  );
}

function Toggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
        on ? "bg-black" : "bg-neutral-200"
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
          on ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

export default SettingsPage;