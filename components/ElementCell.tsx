const ElementCell = ({ element, fill }: ElementCellProps) => {
  // TODO style
  return (
    <div className="box-border h-32 p-4 border-2 md:w-32">
      <ElementSVG fill={fill} />
      <p className="text-center text-xs">{element}</p>
    </div>
  );
};
