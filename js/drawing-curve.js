class DrawingCurve extends PaintFunction{

    constructor(contextReal,contextDraft,selectedStrokeColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;

    }

    onSlider(){
      this.contextDraft.beginPath();
      this.contextDraft.fillRect(this.selectedCpX, this.selectedCpY, 10, 10);
      this.contextDraft.stroke();
    }

    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        this.contextDraft.beginPath();
        this.contextDraft.strokeStyle = this.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.quadraticCurveTo(this.selectedCpX, this.selectedCpY, coord[0], coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove(){}

    onMouseUp(coord){
        this.contextDraft.clearRect(this.selectedCpX, this.selectedCpY, 10, 10);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.strokeStyle = this.selectedStrokeColour;
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.quadraticCurveTo(this.selectedCpX, this.selectedCpY, coord[0], coord[1]);
        this.contextReal.stroke();

        // History
        history.push($('#canvas-real')[0].toDataURL());

    }



    onMouseLeave(){}
    onMouseEnter(){}



}
