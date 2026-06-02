// ============================================================
// AdminTweaks — exposes a few variations for the user to compare
// ============================================================
const AdminTweaks = ({ tweaks, setTweak }) => {
  return (
    <TweaksPanel title="Tweaks · Landing Administradores">
      <TweakSection label="Hero">
        <TweakRadio
          label="Color de acento en el headline"
          value={tweaks.heroAccent}
          onChange={(v) => setTweak("heroAccent", v)}
          options={[
            { value: "green", label: "Verde" },
            { value: "navy",  label: "Azul" },
          ]}
        />
      </TweakSection>

      <TweakSection label="Recompensas">
        <TweakToggle
          label="Panel oscuro (navy)"
          value={tweaks.showRewardsBg}
          onChange={(v) => setTweak("showRewardsBg", v)}
        />
      </TweakSection>

      <TweakSection label="CTA">
        <TweakText
          label="Texto del botón principal"
          value={tweaks.ctaCopy}
          onChange={(v) => setTweak("ctaCopy", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

window.AdminTweaks = AdminTweaks;
