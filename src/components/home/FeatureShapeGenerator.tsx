import { ReactNode } from "react";

interface FeatureItem {
  icon: ReactNode;
  description: string;
}

type FeatureItems = FeatureItem[];

export default function FeatureShapeGenerator({ features, styles }: { features: FeatureItems; styles?: string}) {
  return (
    <div className={`features flex ${styles}`}>
      <div className="col-1">
        {features.map((item, index) => {
          if (index <= 2) {
            return (
              <span className={`child-${index + 1}`} key={index}>
                {item.icon}
              </span>
            );
          }
        })}
      </div>

      <div className="col-2">
        {features.map((item, index) => {
          if (index > 2 && index < 5) {
            return (
              <span className={`child-${index + 1}`} key={index}>
                {item.icon}
              </span>
            );
          }
        })}
      </div>

      <div className="col-3">
        {features.map((item, index) => {
          if (index > 4) {
            return (
              <span className={`child-${index + 1}`} key={index}>
                {item.icon}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}
