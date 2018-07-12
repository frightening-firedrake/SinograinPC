<template>
    <form class="ui-body-bg">
		<img class="code" :src="codeUrl" alt="" />
		<div class="zw-page" style="margin-left: 113.4px; margin-right: 113.4px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 10.4px; padding-top: 0px; border-top: 0px;"><span style="font-family: 黑体; font-size: 18pt;">馒头品尝评分记录表</span></p>
				<div class="zw-header">
					<p style="margin: 0px 0 0px 0px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">时间：</span>{{formdatas.riqi|data}}</p>
					<p style="margin: 0px 0 0px 0px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 品评员：</span><input style='text-algin:left;' class="check" v-model="formdatas.pinpingyuan" type="text"  v-if='!readonly'/>{{readonly?formdatas.pinpingyuan:''}}</p>
					<p style="margin: 0px 0px 0px 35px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">{{formdatas.table_version}}</span></p>		
				</div>

				<table class="zw-table" data-node-id="node_08907544552050795" style="margin-left: 0; direction: ltr; width: 6.38889in; border-collapse: collapse;">
					<colgroup>
						<col style="width: 1.01in;">
						<col style="width: 3.37in;">
						<col style="width: 0.39in;">
						<col style="width: 0.39in;">
						<col style="width: 0.39in;">
						<col style="width: 0.39in;">
						<col style="width: 0.39in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 42.8px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">项 &nbsp;目</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 42.8px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">得 &nbsp; 分 &nbsp; 标 &nbsp; 准</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 42.8px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样 &nbsp;品 &nbsp;编 &nbsp;号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" merge="vmp" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="vmp" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td> 
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46.4667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">监{{formdatas.smallSampleNum}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46.4667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46.4667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46.4667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46.4667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="text-align:center; margin: 0px; line-height: 1.5; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">比容(ml/g)</span></p>
									<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（15分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">比容大于或等于2.3得满分15分;</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">比容每下降0.1分扣1.0分;</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly' v-model.number="formdatas.birong" />{{readonly?formdatas.birong:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 67.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">表面色泽</span></p>
									<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（15分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 正常： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12分—15分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 稍暗： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6分—11分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 灰暗： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0分—5分；</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly' v-model.number="formdatas.biaomianseze"/>{{readonly?formdatas.biaomianseze:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 65.9333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.75; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">弹 性</span></p>
									<p style="margin: 0px; line-height: 1.75; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（10分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 手指按压回弹性好： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8分—10分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 手指按压回弹性弱： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5分—7分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 手指按压不回弹或按压困难： &nbsp; &nbsp; &nbsp; &nbsp; 0分—4分；</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text" v-if="!readonly" v-model.number="formdatas.tanxing" />{{readonly?formdatas.tanxing:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 73.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">气 味</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（20分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 正常发酵麦香味: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 16分—20分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 气味平淡，无香味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 13分—15分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 有轻微异味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10分—12分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 明显异味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1分—9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 有严重异味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0分；</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly' v-model.number="formdatas.qiwei"/>{{readonly?formdatas.qiwei:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 118.2px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">食 味</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（20分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 正常小麦固有的香味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 16分—20分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 滋味平淡： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;13分—15分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 有轻微异味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10分—12分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 有明显异味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1分—9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 有严重异味： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0分；</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text" v-if="!readonly" v-model.number="formdatas.shiwei" />{{readonly?formdatas.shiwei:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 119.133px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">韧 性</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（10分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 咬劲强： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8分—10分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 咬劲一般： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5分—7分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 咬劲差,切时掉渣或咀嚼干硬： &nbsp; &nbsp; &nbsp; &nbsp; 0分—4分；</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly' v-model.number="formdatas.renxing"/>{{readonly?formdatas.renxing:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 78.1333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">粘 性</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（10分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 爽口不粘牙： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8分—10分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 稍粘： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5分—7分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 咀嚼不爽口，很粘： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0分—4分；</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly' v-model.number="formdatas.nianxing"/>{{readonly?formdatas.nianxing:''}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 86.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 60.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">品 &nbsp;尝 &nbsp;评 &nbsp;分 &nbsp;值</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" colspan="5" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 60.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{pinchangpingfenzhi}}</p>
								</div>
							</td>
							<!--<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 60.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 60.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 60.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 60.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>-->
						</tr>
					</tbody>
				</table>
				<p style="margin: 0px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><br></p>
			</div>
			<div class="zw-footer">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div></div>
			<div></div>
		</div>
	</form>
</template>

<style>

</style>
<script>

//import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
export default {
  props: ['formdatas','readonly'],
  computed:{
	pinchangpingfenzhi(){
		var pinchangpingfenzhi = this.formdatas.birong*1 + this.formdatas.biaomianseze*1+ this.formdatas.tanxing*1+ this.formdatas.qiwei*1+ this.formdatas.shiwei*1+ this.formdatas.renxing*1+ this.formdatas.nianxing*1
		if(pinchangpingfenzhi!==0&&!isNaN(pinchangpingfenzhi)){
			return this.jsdjg.pinchangpingfenzhi = this.round(pinchangpingfenzhi,0);		
		}
		return this.jsdjg.pinchangpingfenzhi='';
	},
    codeUrl(){
    	return this.apiRoot +'/grain/upload/smaBarcode/'+this.formdatas.smallSamplePic
    }
  },
  created(){

//	移除监听事件
    this.$root.eventHub.$off('printChecklist')
//	监听打印事件
  	this.$root.eventHub.$on("printChecklist",function(){  
		this.submit();

  	}.bind(this));
  },
  destroy(){
  	this.$root.eventHub.$off('printChecklist')
  },
  methods: {
	submit(){	
//		for(var key in this.formdatas){
//			if(!this.formdatas[key]){
//				this.isEmpty=true;
//				break
//			}else{
//				this.isEmpty=false;
//			}
//		}
		if(this.isEmpty){			
			this.$alert('请完善表内信息','提示信息',{});
		}else{			
			this.$emit('submit',this.jsdjg)
		}
	},
	round(num, digit){
	    var ratio = Math.pow(10, digit),
	        _num = num * ratio,//倍数
	        mod = _num % 1,//指定位置后小数
	        integer = Math.floor(_num);//指定位向下取整
//	        console.log(mod,integer)
	    if(num===''){
	        return ''
	    }else if(Math.floor(num)== num){
	    	var str;
	    	if(digit==0){
	    		str=num;
	    	}else{
		    	str=num+'.';
		        for (var i=0;i<digit;i++){
					str+='0'
				}
	    	}
	        return str
	    }else if(mod > 0.5){
	        return ((integer + 1) / ratio).toFixed(digit);
	    }else if(mod < 0.5){
	    	if(integer / ratio==0){
	        	var str='0.';
		        for (var i=0;i<digit;i++){
					str+='0'
				}
		        return str
	    	}else{
	        	return (integer / ratio).toFixed(digit);
	    	}
	    }else{
	        return ((integer % 2 === 0 ? integer : integer + 1) / ratio).toFixed(digit);
	    }
	},

  },
  data() {
    return {
      isEmpty:false,

      gs1Url:'static/images/sys/gs1.jpg',
      gs2Url:'static/images/sys/gs2.jpg',
      mjxsf1Url:'static/images/sys/mjxsf1.png',

      jianyanbianhao_1:'1',
      jianyanbianhao_2:'2',
      jsdjg:{
		
      }
    }
  },
  filters: {
   data:function (input) {
       var d = new Date(input);
       var year = d.getFullYear();
       var month = d.getMonth() + 1;
       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
       var hour = d.getHours();
       var minutes = d.getMinutes();
       var seconds = d.getSeconds();
       return  year+ '-' + month + '-' + day;
//     return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
   }
  }
}
</script>
