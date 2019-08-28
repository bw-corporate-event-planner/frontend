import React, { useState, useEffect } from "react";
import { Card, Icon, Statistic, Tooltip, Progress, Spin } from "antd";

const Expenditures = props => {
  const { totalCost, purchasedItemsCost, budget } = props;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercent(Math.floor((100 * purchasedItemsCost) / budget));
    }, 1000);
    // setPercent(Math.floor((100 * totalCost) / budget));
  }, [totalCost]);
  const percentOfBudget = Math.floor((100 * purchasedItemsCost) / budget);

  return (
    <div className="expenditures">
      <div className="progress-bar-container">
        <Progress
          type="circle"
          width="180px"
          strokeWidth="10"
          strokeColor={{
            "0%": "#87d068",
            "100%": "#108ee9"
          }}
          percent={percentOfBudget}
        />
      </div>
      <div className="budget-stats">
        <Card className="stat">
          {!totalCost ? (
            <Spin />
          ) : (
            <Statistic
              title="All Items Cost"
              value={totalCost}
              precision={2}
              valueStyle={{ color: "#87D068" }}
              prefix={<Icon type="dollar" />}
            />
          )}
        </Card>
        <Card className="stat">
          {!totalCost ? (
            <Spin />
          ) : (
            <Statistic
              title="Purchased Items Total"
              value={purchasedItemsCost}
              precision={2}
              valueStyle={{ color: "#EF9F1F" }}
              prefix={<Icon type="dollar" />}
            />
          )}
        </Card>
        <Card className="stat">
          {!totalCost ? (
            <Spin />
          ) : (
            <Statistic
              title="Budget Remaining"
              value={budget - purchasedItemsCost}
              precision={2}
              valueStyle={{ color: "#0F8FE8" }}
              prefix={<Icon type="dollar" />}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Expenditures;
